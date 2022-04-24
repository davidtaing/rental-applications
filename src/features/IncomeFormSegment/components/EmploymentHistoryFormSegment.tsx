import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment/types";
import { createEmployment } from "../utils";
import { EmploymentItem } from "./EmploymentItem";

interface Props {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}

export function EmploymentHistoryFormSegment({
  tenantIndex,
  control,
  register,
}: Props) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.employment`,
  });

  return (
    <div className="employmentHistoryForm subFormSegment">
      {fields.map((field, index) => (
        <EmploymentItem
          key={field.id}
          register={register}
          tenantIndex={tenantIndex}
          index={index}
        />
      ))}
      <div className="fieldArray--btn-container">
        <button
          className="btn--secondary-outline"
          type="button"
          onClick={() => append(createEmployment())}
        >
          +
        </button>
        <button
          className="btn--danger-outline"
          type="button"
          onClick={() => remove(fields.length - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
