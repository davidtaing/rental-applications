import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelect";
import { RentalReferenceType } from "../types";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function RentalReferenceTypeSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      registerReturn={registerReturn}
      values={Object.values(RentalReferenceType)}
      label="Type:"
    />
  );
}
