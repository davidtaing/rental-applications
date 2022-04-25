import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export interface RealEstateIncomeItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
  index: number;
}

export function RealEstateIncomeItem({
  register,
  tenantIndex,
  index,
}: RealEstateIncomeItemProps) {
  return (
    <div className="subFormSegment__item">
      <h3>Property</h3>
      <LabelledInput
        label="Address:"
        registerReturn={register(
          `tenants.${tenantIndex}.realEstateIncome.${index}.address`
        )}
      />
      <LabelledInput
        label="Rent:"
        type="number"
        registerReturn={register(
          `tenants.${tenantIndex}.realEstateIncome.${index}.rent`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${tenantIndex}.realEstateIncome.${index}.rent`
        )}
      />
    </div>
  );
}
