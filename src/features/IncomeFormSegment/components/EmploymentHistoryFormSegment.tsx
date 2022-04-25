import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment/types";
import { Employment } from "../types";
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
      <FieldArrayButtons<Employment>
        append={append}
        remove={remove}
        createItemFn={createEmployment}
        arrayLength={fields.length}
      />
    </div>
  );
}
