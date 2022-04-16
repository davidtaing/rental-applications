import LabelledInput from "../../../components/common/LabelledInput";

interface Props {
  formikReference: string;
}

export function IncomeSupportFormSegment({ formikReference }: Props) {
  return (
    <div className="incomeSupportFormSegment">
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
