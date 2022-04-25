import { UseFormRegisterReturn } from "react-hook-form";
import { Gender } from "../../types/Gender";
import { LabelledSelect } from "./LabelledSelect";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function GenderSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      registerReturn={registerReturn}
      values={Object.values(Gender)}
      label="Gender:"
    />
  );
}
