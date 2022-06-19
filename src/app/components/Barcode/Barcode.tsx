export interface BarcodeProps {
  value: string;
}

export default function Barcode(props: BarcodeProps) {
  var Barcode = require("react-barcode");

  return <Barcode value={props.value} />;
}
