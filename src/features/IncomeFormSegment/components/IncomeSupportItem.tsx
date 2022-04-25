import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export interface IncomeSupportItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
  index: number;
}

export function IncomeSupportItem({
  register,
  tenantIndex,
  index,
}: IncomeSupportItemProps) {
  return (
    <div>
      <h4>Payment</h4>
      <LabelledInput
        label={"Description:"}
        registerReturn={register(
          `tenants.${tenantIndex}.incomeSupport.${index}.description`
        )}
      />
      <LabelledInput
        label={"Amount:"}
        registerReturn={register(
          `tenants.${tenantIndex}.incomeSupport.${index}.amount`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${tenantIndex}.incomeSupport.${index}.frequency`
        )}
      />
    </div>
  );
}
