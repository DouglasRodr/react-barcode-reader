import mark from "../../assets/scan-mark.png";
import * as SM from "./ScanMark.styles";

export interface ScanMarkProps {
  label?: string;
}

export default function ScanMark(props: ScanMarkProps) {
  return (
    <SM.Wrapper>
      <SM.Container>
        <img
          src={mark}
          alt="Marca para leitura do código"
          width="260"
          height="260"
        />
        <SM.Label>{props.label || "Aponte para o código de barras"}</SM.Label>
      </SM.Container>
    </SM.Wrapper>
  );
}
