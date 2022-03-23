import { SelectHTMLAttributes } from "react";
import LabelledSelect from "../common/LabelledSelect";

const selectValues = ["Weekly", "Fortnightly", "Monthly"];

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
