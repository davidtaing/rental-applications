import LabelledInput from "../../../components/common/LabelledInput";
import { RentalStatusSelect } from "./RentalStatusSelect";

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
      <RentalStatusSelect
        formikReference={`${formikReference}.rentalHistory.status`}
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
