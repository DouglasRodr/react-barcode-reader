import { useRef } from "react";
import CameraView from "../../components/CameraView";
import ScanMark from "../../components/ScanMark";

export default function BarcodeReader() {
  const scannerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CameraView scannerRef={scannerRef} />
      <ScanMark />
    </>
  );
}
