import { LabelledInput } from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";
import { NestedFieldItemProps } from "../../../types/NestedFieldItemProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export function RentalIncomeItem({
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
          `tenants.${parentIndex}.rentalIncome.${index}.address`
        )}
      />
      <LabelledInput
        label="Rent:"
        type="number"
        registerReturn={register(
          `tenants.${parentIndex}.rentalIncome.${index}.rent`
        )}
      />
      <PaymentFrequencySelect
        registerReturn={register(
          `tenants.${parentIndex}.rentalIncome.${index}.rent`
        )}
      />
    </div>
  );
}
