import { LabelledInput } from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";
import { NestedFieldItemProps } from "../../../types/NestedFieldItemProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { EmploymentTypeSelect } from "./EmploymentTypeSelect";

export function EmploymentItem({
  register,
  parentIndex,
  index,
}: NestedFieldItemProps<TenantDetailsFormState>) {
  return (
    <div className="employmentItem">
      <h4>Job</h4>
      <div>
        <LabelledInput
          label="Title: "
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.title`
          )}
        />
        <LabelledInput
          label="Company:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.company`
          )}
        />
        <EmploymentTypeSelect
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.type`
          )}
        />
        <LabelledInput
          label="Amount:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.amount`
          )}
        />
        <PaymentFrequencySelect
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.frequency`
          )}
        />
        <h4>Reference</h4>
        <LabelledInput
          label="Name:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.reference.name`
          )}
        />
        <LabelledInput
          label="Position:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.reference.position`
          )}
        />
        <LabelledInput
          label="Phone:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.reference.phone`
          )}
        />
        <LabelledInput
          label="Email:"
          registerReturn={register(
            `tenants.${parentIndex}.employment.${index}.reference.email`
          )}
        />
      </div>
    </div>
  );
}
