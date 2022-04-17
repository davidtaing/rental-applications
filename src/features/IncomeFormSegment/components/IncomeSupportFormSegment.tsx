import LabelledInput from "../../../components/common/LabelledInput";
import { IncomeSupport } from "../types";

interface Props {
  formikReference: string;
  data: Array<IncomeSupport>;
}

export function IncomeSupportFormSegment({ formikReference, data }: Props) {
  return (
    <div className="incomeSupportFormSegment">
      <h3>Income Support</h3>
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
