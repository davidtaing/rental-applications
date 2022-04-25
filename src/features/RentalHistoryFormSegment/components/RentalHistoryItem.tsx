import { LabelledInput } from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";
import { NestedFieldItemProps } from "../../../types/NestedFieldItemProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { RentalReferenceTypeSelect } from "./RentalReferenceTypeSelect";
import { RentalStatusSelect } from "./RentalStatusSelect";

export function RentalHistoryItem({
  register,
  parentIndex,
  index,
}: NestedFieldItemProps<TenantDetailsFormState>) {
  return (
    <div className="subFormSegment__item">
      <h4>Property</h4>
      <LabelledInput
        label="Address:"
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.address`
        )}
      />
      <RentalStatusSelect
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.status`
        )}
      />
      <LabelledInput
        label="Rent:"
        type="number"
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.rent`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.frequency`
        )}
      />
      <h4>Reference:</h4>
      <LabelledInput
        label="Name:"
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.reference.name`
        )}
      />
      <RentalReferenceTypeSelect
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.reference.type`
        )}
      />
      <LabelledInput
        label="Phone:"
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.reference.phone`
        )}
      />
      <LabelledInput
        label="Email:"
        registerReturn={register(
          `tenants.${parentIndex}.rentalHistory.${index}.reference.email`
        )}
      />
    </div>
  );
}
