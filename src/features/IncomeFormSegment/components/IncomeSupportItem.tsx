import LabelledInput from "../../../components/common/LabelledInput";

export interface IncomeSupportItemProps {
  formikReference: string;
}

export function IncomeSupportItem({ formikReference }: IncomeSupportItemProps) {
  return (
    <div className="incomeSupportItem">
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
      <LabelledInput
        labelText="Frequency:"
        id="incomeSupportFrequency"
        name={`${formikReference}.incomeSupport.freequency`}
        type="text"
      />
    </div>
  );
}
