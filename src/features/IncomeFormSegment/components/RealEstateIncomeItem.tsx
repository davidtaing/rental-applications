import LabelledInput from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";

export interface RealEstateIncomeItemProps {
  formikReference: string;
}

export function RealEstateIncomeItem({
  formikReference,
}: RealEstateIncomeItemProps) {
  return (
    <div className="subFormSegment__item">
      <h3>Property</h3>
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
      <PaymentFrequencySelect
        formikReference={`${formikReference}.realEstate.frequency`}
      />
    </div>
  );
}
