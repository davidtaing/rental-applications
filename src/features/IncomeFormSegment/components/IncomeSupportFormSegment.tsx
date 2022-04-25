import { useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { NestedTenantFieldArrayProps } from "../../TenantDetailsFormSegment";
import { createIncomeSupport } from "../utils";
import { IncomeSupportItem } from "./IncomeSupportItem";

export function IncomeSupportFormSegment({
  tenantIndex,
  control,
  register,
}: NestedTenantFieldArrayProps) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.incomeSupport`,
  });

  return (
    <div className="incomeSupportForm subFormSegment">
      <h3>Income Support</h3>
      {fields.map((field, index) => (
        <IncomeSupportItem
          key={field.id}
          register={register}
          parentIndex={tenantIndex}
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
