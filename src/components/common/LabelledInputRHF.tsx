import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
  label: string;
}

export function LabelledInput({ key, registerReturn, label }: Props) {
  return (
    <div className="labelledInput">
      <label className="input__label">{label}</label>
      <input key={key} {...registerReturn} />
      <span className="input__error">Error: Invalid Input</span>
    </div>
  );
}
