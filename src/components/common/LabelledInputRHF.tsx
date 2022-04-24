import { FieldAttributes } from "formik";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends FieldAttributes<any> {
  fieldId?: string;
  registerReturn: UseFormRegisterReturn;
  label: string;
}

export function LabelledInput({
  fieldId,
  registerReturn,
  label,
  ...otherProps
}: Props) {
  return (
    <div className="labelledInput">
      <label className="input__label">{label}</label>
      <input key={fieldId} {...registerReturn} {...otherProps} />
      <span className="input__error">Error: Invalid Input</span>
    </div>
  );
}
