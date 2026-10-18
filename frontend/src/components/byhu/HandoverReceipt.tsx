import { beforeYouHirePage } from "../../byhuContent";

type Receipt = (typeof beforeYouHirePage.whatsYours.receipt);

type HandoverReceiptProps = {
  receipt: Receipt;
};

export function HandoverReceipt({ receipt }: HandoverReceiptProps) {
  return (
    <div className="byhu-receipt" aria-label="Handover list">
      <div className="byhu-receipt-rh">
        <b>{receipt.title}</b>
        <span>{receipt.brand}</span>
      </div>
      <ul>
        {receipt.items.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <span>{item.mark}</span>
          </li>
        ))}
      </ul>
      <p className="byhu-receipt-rf">{receipt.footnote}</p>
      <span className="byhu-receipt-stamp">{receipt.stamp}</span>
    </div>
  );
}
