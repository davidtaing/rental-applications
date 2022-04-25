import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export interface RentalIncomeItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
  index: number;
}

export function RentalIncomeItem({
  register,
  tenantIndex,
  index,
}: RentalIncomeItemProps) {
  return (
    <div className="subFormSegment__item">
      <h4>Property</h4>
      <LabelledInput
        label="Address:"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalIncome.${index}.address`
        )}
      />
      <LabelledInput
        label="Rent:"
        type="number"
        registerReturn={register(
          `tenants.${tenantIndex}.rentalIncome.${index}.rent`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${tenantIndex}.rentalIncome.${index}.rent`
        )}
      />
    </div>
  );
}
