import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelect";
import { PetType } from "../types";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function PetTypeSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      registerReturn={registerReturn}
      values={Object.values(PetType)}
      label="Type:"
    />
  );
}
