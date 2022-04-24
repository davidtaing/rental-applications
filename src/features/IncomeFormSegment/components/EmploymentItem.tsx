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
          fieldId={key}
          label="Title: "
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.title`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Company:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.company`
          )}
        />
        <EmploymentTypeSelect
          fieldId={key}
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.type`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Amount:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.amount`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Frequency:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.frequency`
          )}
        />
        <h4>Reference</h4>
        <LabelledInput
          fieldId={key}
          label="Name:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.name`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Position:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.position`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Phone:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.phone`
          )}
        />
        <LabelledInput
          fieldId={key}
          label="Email:"
          registerReturn={register(
            `tenants.${tenantIndex}.employment.${index}.reference.email`
          )}
        />
      </div>
    </div>
  );
}
