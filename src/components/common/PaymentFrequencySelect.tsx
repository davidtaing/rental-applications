import { UseFormRegisterReturn } from "react-hook-form";
import { PaymentFrequency } from "../../types/PaymentFrequency";
import { LabelledSelect } from "./LabelledSelect";

interface Props {
  fieldId?: string;
  registerReturn: UseFormRegisterReturn;
}

export function PaymentFrequencySelect({ fieldId, registerReturn }: Props) {
  return (
    <LabelledSelect
      fieldId={fieldId}
      registerReturn={registerReturn}
      values={Object.values(PaymentFrequency)}
      label={"Frequency:"}
    />
  );
}
