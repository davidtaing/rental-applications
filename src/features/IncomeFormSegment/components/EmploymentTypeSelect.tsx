import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { EmploymentType } from "../types";

interface Props {
  fieldId: string;
  registerReturn: UseFormRegisterReturn;
}

export function EmploymentTypeSelect({ fieldId, registerReturn }: Props) {
  return (
    <LabelledSelect
      fieldId={fieldId}
      registerReturn={registerReturn}
      values={Object.values(EmploymentType)}
      label="Type:"
    />
  );
}
