import LabelledInput from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";
import { RentalReferenceTypeSelect } from "./RentalReferenceTypeSelect";
import { RentalStatusSelect } from "./RentalStatusSelect";

export interface RentalHistoryItemProps {
  formikReference: string;
}

export function RentalHistoryItem({ formikReference }: RentalHistoryItemProps) {
  return (
    <div className="subFormSegment__item">
      <h3>Property</h3>
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
      <PaymentFrequencySelect
        formikReference={`${formikReference}.rentalHistory.frequency`}
      />
      <h4>Reference</h4>
      <LabelledInput
        labelText="Name:"
        id="rentalHistoryReferenceName"
        name={`${formikReference}.rentalHistory.reference.name`}
        type="text"
      />
      <RentalReferenceTypeSelect
        formikReference={`${formikReference}.rentalHistory.reference.type`}
      />
      <LabelledInput
        labelText="Phone:"
        id="rentalHistoryReferencePhone"
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
