import Quagga from "quagga-scanner";
import { RefObject, useCallback, useLayoutEffect } from "react";

export interface ScannerProps {
  scannerRef: RefObject<HTMLDivElement>;
  onDetected: (code: string) => Promise<any>;
}

interface ScannerResult {
  codeResult: ScannerCodeResult;
  line: {
    x: number;
    y: number;
  }[];
  angle: number;
  pattern: number[];
  box: number[][];
  boxes: number[][][];
}

interface ScannerCodeResult {
  code: string;
  start: number;
  end: number;
  codeset: number;
  startInfo: {
    error: number;
    code: number;
    start: number;
    end: number;
  };
  decodedCodes: {
    error?: number;
    code: number;
    start: number;
    end: number;
  }[];
  endInfo: {
    error: number;
    code: number;
    start: number;
    end: number;
  };
  direction: number;
  format: string;
}

function getMedianOfCodeErrors(errors: number[]) {
  errors.sort((a, b) => a - b);
  const half = Math.floor(errors.length / 2);
  if (errors.length % 2 === 1) {
    return errors[half];
  }
  return (errors[half - 1] + errors[half]) / 2;
}

export default function Scanner({ scannerRef, onDetected }: ScannerProps) {
  const errorCheck = useCallback(
    (result: ScannerResult) => {
      if (!onDetected) {
        return;
      }
      Quagga.offDetected(errorCheck);

      console.log(result);
      let errors: number[] = [];
      result.codeResult.decodedCodes.forEach(function (decodedCode) {
        if (decodedCode.error !== undefined) {
          errors.push(decodedCode.error);
        }
      });

      const median = getMedianOfCodeErrors(errors);

      if (median < 0.25) {
        onDetected(result.codeResult.code).then(() => {
          Quagga.onDetected(errorCheck);
        });
      }
    },
    [onDetected]
  );

  useLayoutEffect(() => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      typeof navigator.mediaDevices.getUserMedia === "function"
    ) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            constraints: {
              width: 1024,
              height: 768,
              facingMode: "environment",
            },
            target: scannerRef.current || undefined,
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ["ean_reader"],
          },
        },
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
          if (scannerRef && scannerRef.current) {
            Quagga.start();
          }
        },
        Quagga.onDetected(errorCheck)
      );
    }
  }, [errorCheck, scannerRef]);

  return null;
}
