import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  key: string;
  registerReturn: UseFormRegisterReturn;
  values: string[];
  label: string;
}

export function LabelledSelect({
  key,
  registerReturn,
  values,
  label,
  ...otherProps
}: Props) {
  return (
    <div className="labelledSelect">
      <label>{label}</label>
      <select key={key} {...registerReturn} {...otherProps}>
        <option value="">Select a Value</option>
        {values.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
