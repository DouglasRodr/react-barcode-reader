import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layout";

export default function BarcodeReaderView() {
  usePageTitle("Barcode Reader");

  return (
    <DefaultLayout>
      <h1>Barcode Reader</h1>
    </DefaultLayout>
  );
}
