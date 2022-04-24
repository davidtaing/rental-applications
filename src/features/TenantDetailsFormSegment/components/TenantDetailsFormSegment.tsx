import { useFieldArray, useForm } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { EmploymentHistoryFormSegment } from "../../IncomeFormSegment/components/EmploymentHistoryFormSegment";
import { Tenant, TenantDetailsFormState } from "../types";
import { initTenantDetailsFormState, createTenant } from "../utils";

/**
 * Form Segment for Rent-Paying Occupants
 */
export function TenantDetailsFormSegment() {
  const { control, register } = useForm<TenantDetailsFormState>({
    defaultValues: initTenantDetailsFormState(),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tenants",
  });

  return (
    <div className="tenantDetailsForm formSegment">
      <h1>Tenant Details</h1>
      {fields.map((field, index) => (
        <div key={field.id}>
          <h2>Tenant</h2>
          <LabelledInput
            key={field.id}
            label="Fullname:"
            registerReturn={register(`tenants.${index}.fullname`)}
          />
          <LabelledInput
            key={field.id}
            label="Gender:"
            registerReturn={register(`tenants.${index}.gender`)}
          />
          <LabelledInput
            type="date"
            label="Date of Birth:"
            key={field.id}
            registerReturn={register(`tenants.${index}.dob`)}
          />
          <LabelledInput
            key={field.id}
            label="Mobile:"
            registerReturn={register(`tenants.${index}.mobile`)}
          />
          <LabelledInput
            key={field.id}
            label="Phone:"
            registerReturn={register(`tenants.${index}.phone`)}
          />
          <LabelledInput
            key={field.id}
            label="Email:"
            registerReturn={register(`tenants.${index}.email`)}
          />

          <h3>Employment</h3>
          <EmploymentHistoryFormSegment
            tenantIndex={index}
            control={control}
            register={register}
          />
          <h3>Income Support Payments</h3>
          <h3>Rental Income</h3>
          <h3>Rental History</h3>
        </div>
      ))}
      <div className="fieldArray--btn-container">
        <button
          className="btn--secondary-outline"
          type="button"
          onClick={() => append(createTenant())}
        >
          Add Tenant
        </button>
        <button
          className="btn--danger-outline"
          type="button"
          onClick={() => remove(fields.length - 1)}
        >
          Remove Tenant
        </button>
      </div>
    </div>
  );
}
