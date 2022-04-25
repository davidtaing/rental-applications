import { useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { NestedFieldArrayProps } from "../../../types/NestedFieldArrayProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { createIncomeSupport } from "../utils";
import { IncomeSupportItem } from "./IncomeSupportItem";

export function IncomeSupportFormSegment({
  index,
  control,
  register,
}: NestedFieldArrayProps<TenantDetailsFormState>) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${index}.incomeSupport`,
  });

  return (
    <div className="incomeSupportForm subFormSegment">
      <h3>Income Support</h3>
      {fields.map((field, index) => (
        <IncomeSupportItem
          key={field.id}
          register={register}
          parentIndex={index}
          index={index}
        />
      ))}
      <FieldArrayButtons
        append={append}
        remove={remove}
        createItemFn={createIncomeSupport}
        arrayLength={fields.length}
      />
    </div>
  );
}
