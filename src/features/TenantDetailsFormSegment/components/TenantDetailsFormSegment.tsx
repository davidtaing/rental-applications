import { useFieldArray, useForm } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { FormNavigation } from "../../FormNavigation";
import { Tenant, TenantDetailsFormState } from "../types";
import { initTenantDetailsFormState, createTenant } from "../utils";
import { TenantItem } from "./TenantItem";

/**
 * Form Segment for Rent-Paying Occupants
 */
export function TenantDetailsFormSegment() {
  const { control, register, getValues } = useForm<TenantDetailsFormState>({
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
        <TenantItem
          key={field.id}
          control={control}
          register={register}
          tenantIndex={index}
        />
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
      <FormNavigation
        prevUrl="/lease-details"
        nextUrl="/other-occupants"
        getValues={() => getValues()}
      />
    </div>
  );
}
