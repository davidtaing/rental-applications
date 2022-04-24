import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldId: string;
  registerReturn: UseFormRegisterReturn;
  values: string[];
  label: string;
}

export function LabelledSelect({
  fieldId,
  registerReturn,
  values,
  label,
  ...otherProps
}: Props) {
  return (
    <div className="labelledSelect">
      <label className="input__label">{label}</label>
      <select key={fieldId} {...registerReturn} {...otherProps}>
        <option value="" selected>
          Select a Value
        </option>
        {values.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <span className="input__error">Error: Invalid Input</span>
    </div>
  );
}
