import { useFieldArray } from "react-hook-form";
import { RentalHistoryItem } from "./RentalHistoryItem";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { createRentalHistory } from "../utils";
import { NestedFieldArrayProps } from "../../../types/NestedFieldArrayProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export function RentalHistoryFormSegment({
  index,
  control,
  register,
}: NestedFieldArrayProps<TenantDetailsFormState>) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `tenants.${index}.rentalHistory`,
  });

  return (
    <div className="rentalHistoryForm subFormSegment">
      <h3>Rental History</h3>
      {fields.map((field, index) => (
        <RentalHistoryItem
          key={field.id}
          register={register}
          parentIndex={index}
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
