import { useFieldArray, useForm } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { EmploymentHistoryFormSegment } from "../../IncomeFormSegment";
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
            label="Fullname:"
            registerReturn={register(`tenants.${index}.fullname`)}
          />
          <LabelledInput
            label="Gender:"
            registerReturn={register(`tenants.${index}.gender`)}
          />
          <LabelledInput
            type="date"
            label="Date of Birth:"
            registerReturn={register(`tenants.${index}.dob`)}
          />
          <LabelledInput
            label="Mobile:"
            registerReturn={register(`tenants.${index}.mobile`)}
          />
          <LabelledInput
            label="Phone:"
            registerReturn={register(`tenants.${index}.phone`)}
          />
          <LabelledInput
            label="Email:"
            registerReturn={register(`tenants.${index}.email`)}
          />
          <EmploymentHistoryFormSegment
            tenantIndex={index}
            control={control}
            register={register}
          />
          <IncomeSupportFormSegment
            tenantIndex={index}
            control={control}
            register={register}
          />
          <h3>Rental Income</h3>
          <h3>Rental History</h3>
        </div>
      ))}
      <FieldArrayButtons<Tenant>
        append={append}
        remove={remove}
        createItemFn={createTenant}
        arrayLength={fields.length}
        buttonSize="large"
        buttonText="Tenant"
        minSize={1}
      />
    </div>
  );
}
