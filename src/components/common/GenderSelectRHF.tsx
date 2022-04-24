import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Gender } from "../../types/Gender";
import { LabelledSelect } from "./LabelledSelectRHF";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
}

export function GenderSelect({ key, registerReturn }: Props) {
  return (
    <LabelledSelect
      key={key}
      registerReturn={registerReturn}
      values={Object.values(Gender)}
      label={"Gender:"}
    />
  );
}
