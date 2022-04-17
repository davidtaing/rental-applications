import LabelledInput from "../../../components/common/LabelledInput";

interface Props {
  formikReference: string;
}

export function RealEstateIncomeItem({ formikReference }: Props) {
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
