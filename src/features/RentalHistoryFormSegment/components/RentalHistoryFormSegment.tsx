import { NestedTenantFieldArrayProps } from "../../TenantDetailsFormSegment";
import { useFieldArray } from "react-hook-form";
import { RentalHistoryItem } from "./RentalHistoryItem";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { createRentalHistory } from "../utils";

export function RentalHistoryFormSegment({
  tenantIndex,
  control,
  register,
}: NestedTenantFieldArrayProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.rentalHistory`,
  });

  return (
    <div className="rentalHistoryForm subFormSegment">
      <h2>Rental History</h2>
      {fields.map((field, index) => (
        <RentalHistoryItem
          key={field.id}
          register={register}
          parentIndex={tenantIndex}
          index={index}
        />
      ))}
      <FieldArrayButtons
        append={append}
        remove={remove}
        createItemFn={createRentalHistory}
        arrayLength={fields.length}
        minSize={1}
      />
    </div>
  );
}
