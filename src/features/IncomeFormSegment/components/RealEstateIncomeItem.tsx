import LabelledInput from "../../../components/common/LabelledInput";

export interface RealEstateIncomeItemProps {
  formikReference: string;
}

export function RealEstateIncomeItem({
  formikReference,
}: RealEstateIncomeItemProps) {
  return (
    <div className="realEstateIncomeItem">
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
