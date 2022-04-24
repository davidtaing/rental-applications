import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
  label: string;
}

export function LabelledInput({ key, registerReturn, label }: Props) {
  return (
    <div className="labelledSelect">
      <label>{label}</label>
      <input key={key} {...registerReturn} />
    </div>
  );
}
