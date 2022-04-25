import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Gender } from "../../types/Gender";
import { LabelledSelect } from "./LabelledSelectRHF";

interface Props {
  fieldId?: string;
  registerReturn: UseFormRegisterReturn;
}

export function GenderSelect({ fieldId, registerReturn }: Props) {
  return (
    <LabelledSelect
      fieldId={fieldId}
      registerReturn={registerReturn}
      values={Object.values(Gender)}
      label={"Gender:"}
    />
  );
}
