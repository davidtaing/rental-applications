import { useFieldArray, useForm } from "react-hook-form";
import { TenantDetailsFormState } from "../types";
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
          <label>Fullname:</label>
          <input key={field.id} {...register(`tenants.${index}.fullname`)} />
          <label>Gender:</label>
          <input key={field.id} {...register(`tenants.${index}.gender`)} />
          <label>Date of Birth:</label>
          <input
            type="date"
            key={field.id}
            {...register(`tenants.${index}.dob`)}
          />
          <label>Mobile:</label>
          <input key={field.id} {...register(`tenants.${index}.mobile`)} />
          <label>Phone:</label>
          <input key={field.id} {...register(`tenants.${index}.phone`)} />
          <label>Email:</label>
          <input key={field.id} {...register(`tenants.${index}.email`)} />

          <h3>Employment</h3>
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
