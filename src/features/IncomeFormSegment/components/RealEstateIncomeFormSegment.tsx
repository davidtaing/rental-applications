import LabelledInput from "../../../components/common/LabelledInput";
import { RealEstateIncome } from "../types";

interface Props {
  formikReference: string;
  data: Array<RealEstateIncome>;
}

export function RealEstateIncomeFormSegment({ formikReference, data }: Props) {
  return (
    <div className="realEstateIncomeFormSegment">
      <h3>Real Estate Income</h3>
      <LabelledInput
        labelText="Address:"
        id="realEstateAddress"
        name={`${formikReference}.realEstate.address`}
        type="text"
      />
      <LabelledInput
        labelText="Rent:"
        id="realEstateRent"
        name={`${formikReference}.realEstate.rent`}
        type="number"
      />
      <LabelledInput
        labelText="Frequency:"
        id="realEstateFrequency"
        name={`${formikReference}.realEstate.frequency`}
        type="text"
      />
    </div>
  );
}
