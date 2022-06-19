import { RefObject } from "react";
import * as CV from "./CameraView.styles";

export interface CameraViewProps {
  scannerRef: RefObject<HTMLDivElement>;
}

export default function CameraView(props: CameraViewProps) {
  return <CV.Wrapper ref={props.scannerRef} />;
}
