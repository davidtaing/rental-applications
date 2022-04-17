import LabelledInput from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";

export interface IncomeSupportItemProps {
  formikReference: string;
}

export function IncomeSupportItem({ formikReference }: IncomeSupportItemProps) {
  return (
    <div className="subFormSegment__item">
      <h3>Payment</h3>
      <LabelledInput
        labelText="Description:"
        id="incomeSupportDescription"
        name={`${formikReference}.incomeSupport.description`}
        type="text"
      />
      <LabelledInput
        labelText="Amount:"
        id="incomeSupportAmount"
        name={`${formikReference}.incomeSupport.amount`}
        type="number"
      />
      <PaymentFrequencySelect
        formikReference={`${formikReference}.incomeSupport.freequency`}
      />
    </div>
  );
}
