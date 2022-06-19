import { useRef } from "react";
import CameraView from "../../components/CameraView";
import ScanMark from "../../components/ScanMark";
import Scanner from "../../components/Scanner";

export default function BarcodeReader() {
  const scannerRef = useRef<HTMLDivElement>(null);

  const onDetected = (code: string): Promise<any> => {
    console.log(code);
    return new Promise();
  };

  return (
    <>
      <CameraView scannerRef={scannerRef} />
      <Scanner scannerRef={scannerRef} onDetected={onDetected} />
      <ScanMark />
    </>
  );
}
