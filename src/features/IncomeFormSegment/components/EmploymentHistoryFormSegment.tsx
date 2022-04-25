import { useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { NestedFieldArrayProps } from "../../../types/NestedFieldArrayProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { Employment } from "../types";
import { createEmployment } from "../utils";
import { EmploymentItem } from "./EmploymentItem";

export function EmploymentHistoryFormSegment({
  index,
  control,
  register,
}: NestedFieldArrayProps<TenantDetailsFormState>) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${index}.employment`,
  });

  return (
    <div className="employmentHistoryForm subFormSegment">
      <h3>Employment</h3>
      {fields.map((field, index) => (
        <EmploymentItem
          key={field.id}
          register={register}
          parentIndex={index}
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
