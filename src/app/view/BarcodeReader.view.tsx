import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layout";
import BarcodeReader from "../features/BarcodeReader";

export default function BarcodeReaderView() {
  usePageTitle("Barcode Reader");

  return (
    <DefaultLayout>
      <BarcodeReader />
    </DefaultLayout>
  );
}
