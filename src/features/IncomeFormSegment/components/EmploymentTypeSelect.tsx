import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { EmploymentType } from "../types";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function EmploymentTypeSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      registerReturn={registerReturn}
      values={Object.values(EmploymentType)}
      label="Type:"
    />
  );
}
