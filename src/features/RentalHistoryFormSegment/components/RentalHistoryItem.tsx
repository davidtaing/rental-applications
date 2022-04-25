import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { RentalStatus, RentalReferenceType } from "../types";

export interface RentalHistoryItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
  index: number;
}

export function RentalHistoryItem({
  register,
  tenantIndex,
  index,
}: RentalHistoryItemProps) {
  return (
    <div className="subFormSegment__item">
      <h4>Property</h4>
      <LabelledInput
        label="Address:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.address`
        )}
      />
      <LabelledSelect
        label="Status:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.status`
        )}
        values={Object.values(RentalStatus)}
      />
      <LabelledInput
        label="Rent:"
        type="number"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.rent`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.frequency`
        )}
      />
      <h4>Reference:</h4>
      <LabelledInput
        label="Name:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.reference.name`
        )}
      />
      <LabelledSelect
        label="Type:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.reference.type`
        )}
        values={Object.values(RentalReferenceType)}
      />
      <LabelledInput
        label="Phone:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.reference.phone`
        )}
      />
      <LabelledInput
        label="Email:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.reference.email`
        )}
      />
    </div>
  );
}
