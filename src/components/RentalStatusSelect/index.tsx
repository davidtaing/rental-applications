import { SelectHTMLAttributes } from "react";
import LabelledSelect from "../common/LabelledSelect";

const selectValues = [
  "Renting with Agency",
  "Renting with Private Landlord",
  "House/Room Share",
  "Living with Parents",
  "Living in Own Property",
  "Just Arrived From Overseas",
  "Living Overseas",
];

/**
 * Select Form Element for Current Rental Status
 * @param props SelectHTMLAttributes<HTMLSelectElement>
 */
function RentalStatusSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="rental-status-select">
      <LabelledSelect
        labelText="Rental Status:"
        values={selectValues}
        {...props}
      />
    </div>
  );
}

export default RentalStatusSelect;
