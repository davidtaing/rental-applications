import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { PetType } from "../types";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
}

export function PetTypeSelect({ key, registerReturn }: Props) {
  return (
    <LabelledSelect
      fieldId={key}
      registerReturn={registerReturn}
      values={Object.values(PetType)}
      label="Type:"
    />
  );
}
