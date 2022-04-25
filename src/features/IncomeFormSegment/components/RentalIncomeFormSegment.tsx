import { useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { NestedFieldArrayProps } from "../../../types/NestedFieldArrayProps";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { createRentalIncome } from "../utils";
import { RentalIncomeItem } from "./RentalIncomeItem";

export function RentalIncomeFormSegment({
  index,
  control,
  register,
}: NestedFieldArrayProps<TenantDetailsFormState>) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${index}.rentalIncome`,
  });

  return (
    <div className="rentalIncomeForm subFormSegment">
      <h3>Real Estate Income</h3>
      {fields.map((field, index) => (
        <RentalIncomeItem
          key={field.id}
          register={register}
          parentIndex={index}
          index={index}
        />
      ))}
      <FieldArrayButtons
        append={append}
        remove={remove}
        createItemFn={createRentalIncome}
        arrayLength={fields.length}
      />
    </div>
  );
}
