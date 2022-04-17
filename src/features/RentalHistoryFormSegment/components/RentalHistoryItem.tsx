import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";
import { RentalStatus } from "../types";

export interface RentalHistoryItemProps {
  formikReference: string;
}

export function RentalHistoryItem({ formikReference }: RentalHistoryItemProps) {
  return (
    <div className="rentalHistoryItem">
      <LabelledInput
        labelText="Address:"
        id="rentalHistoryAddress"
        name={`${formikReference}.rentalHistory.address`}
        type="text"
      />
      <LabelledSelect
        labelText="Status:"
        name={`${formikReference}.rentalHistory.status`}
        values={[
          RentalStatus.AGENCY_RENTAL,
          RentalStatus.PRIVATE_RENTAL,
          RentalStatus.LIVING_WITH_PARENTS,
          RentalStatus.LIVING_IN_OWN_PROPERTY,
          RentalStatus.SHARING,
          RentalStatus.CURRENTLY_OVERSEAS,
          RentalStatus.JUST_ARRIVED_FROM_OVERSEAS,
          RentalStatus.OTHER,
        ]}
      />
      <LabelledInput
        labelText="Rent:"
        id="rentalHistoryRent"
        name={`${formikReference}.rentalHistory.rent`}
        type="text"
      />
      <LabelledInput
        labelText="Frequency:"
        id="rentalHistoryFrequency"
        name={`${formikReference}.rentalHistory.frequency`}
        type="text"
      />
      <h4>Reference</h4>
      <LabelledInput
        labelText="Name:"
        id="rentalHistoryReferenceName"
        name={`${formikReference}.rentalHistory.reference.name`}
        type="text"
      />
      <LabelledInput
        labelText="Type:"
        id="rentalHistoryReferenceType"
        name={`${formikReference}.rentalHistory.reference.type`}
        type="text"
      />
      <LabelledInput
        labelText="Phone:"
        id="rentalHistoryReferencPhone"
        name={`${formikReference}.rentalHistory.reference.phone`}
        type="text"
      />
      <LabelledInput
        labelText="Email:"
        id="rentalHistoryReferenceName"
        name={`${formikReference}.rentalHistory.reference.email`}
        type="text"
      />
    </div>
  );
}
