import { SelectHTMLAttributes } from "react";
import LabelledSelect from "../common/LabelledSelect";

const selectValues = ["Weekly", "Fortnightly", "Monthly"];

/**
 * Select Form Element for Employment Payment Frequency
 * @param props SelectHTMLAttributes<HTMLSelectElement>
 */
function PayPeriodSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="pay-period-select">
      <LabelledSelect
        labelText="Pay Period:"
        values={selectValues}
        {...props}
      />
    </div>
  );
}

export default PayPeriodSelect;
