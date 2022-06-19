import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Barcode from "../../components/Barcode";
import CameraView from "../../components/CameraView";
import ScanMark from "../../components/ScanMark";
import Scanner from "../../components/Scanner";

export default function BarcodeReader() {
  const scannerRef = useRef<HTMLDivElement>(null);
  const swal = withReactContent(Swal);

  const onDetected = (code: string): Promise<any> => {
    return swal.fire({
      icon: "success",
      title: "Código de Barras Localizado",
      html: <Barcode value={code} />,
      confirmButtonColor: "#006BC6",
    });
  };

  return (
    <>
      <CameraView scannerRef={scannerRef} />
      <Scanner scannerRef={scannerRef} onDetected={onDetected} />
      <ScanMark />
    </>
  );
}
