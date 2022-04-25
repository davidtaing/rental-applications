import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelect";
import { RentalStatus } from "../types";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function RentalStatusSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      label="Status:"
      registerReturn={registerReturn}
      values={Object.values(RentalStatus)}
    />
  );
}
