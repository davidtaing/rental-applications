import { SelectHTMLAttributes } from "react";
import LabelledSelect from "../common/LabelledSelect";

const selectValues = ["Full Time", "Part Time", "Casual", "Self-Employed"];

function EmploymentTypeSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="employment-status-select">
      <LabelledSelect labelText="Type:" values={selectValues} {...props} />
    </div>
  );
}

export default EmploymentTypeSelect;
