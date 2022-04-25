import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { EmploymentTypeSelect } from "./EmploymentTypeSelect";

export interface EmploymentItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
  index: number;
}

export function EmploymentItem({
  register,
  tenantIndex,
  index,
}: EmploymentItemProps) {
  return (
    <div className="employmentItem">
      <h3>Job</h3>
      <div>
        <LabelledInput
          label="Title: "
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.title`
          )}
        />
        <LabelledInput
          label="Company:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.company`
          )}
        />
        <EmploymentTypeSelect
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.type`
          )}
        />
        <LabelledInput
          label="Amount:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.amount`
          )}
        />
        <PaymentFrequencySelect
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.frequency`
          )}
        />
        <h4>Reference</h4>
        <LabelledInput
          label="Name:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.name`
          )}
        />
        <LabelledInput
          label="Position:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.position`
          )}
        />
        <LabelledInput
          label="Phone:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.phone`
          )}
        />
        <LabelledInput
          label="Email:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.email`
          )}
        />
      </div>
    </div>
  );
}
