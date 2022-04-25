import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInput";
import { LabelledSelect } from "../../../components/common/LabelledSelect";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { RentalStatus, RentalReferenceType } from "../types";
import { RentalReferenceTypeSelect } from "./RentalReferenceTypeSelect";
import { RentalStatusSelect } from "./RentalStatusSelect";

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
      <RentalStatusSelect
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.status`
        )}
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
      <RentalReferenceTypeSelect
        registerReturn={register(
          `tenants.${tenantIndex}.rentalHistory.${index}.reference.type`
        )}
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
