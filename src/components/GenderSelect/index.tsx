import { SelectHTMLAttributes } from "react";
import LabelledSelect from "../common/LabelledSelect";

const selectValues = ["Male", "Female", "Other"];

/**
 * Select Form Element for Gender
 * @param props SelectHTMLAttributes<HTMLSelectElement>
 */
function GenderSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="gender-select">
      <LabelledSelect labelText="Gender:" values={selectValues} {...props} />
    </div>
  );
}

export default GenderSelect;
