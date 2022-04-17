import { PaymentFrequency } from "../../types/PaymentFrequency";
import LabelledSelect from "./LabelledSelect";

interface Props {
  formikReference: string;
}

export function PaymentFrequencySelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      name={formikReference}
      labelText="Frequency:"
      values={[
        PaymentFrequency.WEEKLY,
        PaymentFrequency.FORTNIGHTLY,
        PaymentFrequency.MONTHLY,
        PaymentFrequency.ANNUALLY,
      ]}
    />
  );
}
