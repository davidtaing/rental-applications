import { LabelledInput } from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";
import { NestedFieldItemProps } from "../../../types/NestedFieldItemProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export function IncomeSupportItem({
  register,
  parentIndex,
  index,
}: NestedFieldItemProps<TenantDetailsFormState>) {
  return (
    <div>
      <h4>Payment</h4>
      <LabelledInput
        label={"Description:"}
        registerReturn={register(
          `tenants.${parentIndex}.incomeSupport.${index}.description`
        )}
      />
      <LabelledInput
        label={"Amount:"}
        registerReturn={register(
          `tenants.${parentIndex}.incomeSupport.${index}.amount`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${parentIndex}.incomeSupport.${index}.frequency`
        )}
      />
    </div>
  );
}
