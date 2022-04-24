import { UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { EmploymentTypeSelect } from "./EmploymentTypeSelect";

export interface EmploymentItemProps {
  register: UseFormRegister<TenantDetailsFormState>;
  key: string;
  tenantIndex: number;
  index: number;
}

export function EmploymentItem({
  register,
  key,
  tenantIndex,
  index,
}: EmploymentItemProps) {
  return (
    <div className="employmentItem">
      <h3>Job</h3>
      <div>
        <LabelledInput
          key={key}
          label="Title: "
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.title`
          )}
        />
        <LabelledInput
          key={key}
          label="Company:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.company`
          )}
        />
        <EmploymentTypeSelect
          key={key}
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.type`
          )}
        />
        <LabelledInput
          key={key}
          label="Amount:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.amount`
          )}
        />
        <LabelledInput
          key={key}
          label="Frequency:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.frequency`
          )}
        />
        <h4>Reference</h4>
        <LabelledInput
          key={key}
          label="Name:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.name`
          )}
        />
        <LabelledInput
          key={key}
          label="Position:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.position`
          )}
        />
        <LabelledInput
          key={key}
          label="Phone:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.phone`
          )}
        />
        <LabelledInput
          key={key}
          label="Email:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.email`
          )}
        />
      </div>
    </div>
  );
}
