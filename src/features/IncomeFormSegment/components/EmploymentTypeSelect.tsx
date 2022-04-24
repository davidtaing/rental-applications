import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { EmploymentType } from "../types";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
}

export function EmploymentTypeSelect({ key, registerReturn }: Props) {
  return (
    <LabelledSelect
      key={key}
      registerReturn={registerReturn}
      values={Object.values(EmploymentType)}
      label="Type:"
    />
  );
}
