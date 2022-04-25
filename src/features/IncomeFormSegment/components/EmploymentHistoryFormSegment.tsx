import { useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { NestedTenantFieldArrayProps } from "../../TenantDetailsFormSegment";
import { Employment } from "../types";
import { createEmployment } from "../utils";
import { EmploymentItem } from "./EmploymentItem";

export function EmploymentHistoryFormSegment({
  tenantIndex,
  control,
  register,
}: NestedTenantFieldArrayProps) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.employment`,
  });

  return (
    <div className="employmentHistoryForm subFormSegment">
      <h3>Employment</h3>
      {fields.map((field, index) => (
        <EmploymentItem
          key={field.id}
          register={register}
          parentIndex={tenantIndex}
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
