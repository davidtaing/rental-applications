import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { createRentalIncome } from "../utils";
import { RentalIncomeItem } from "./RentalIncomeItem";

interface Props {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}

export function RentalIncomeFormSegment({
  tenantIndex,
  control,
  register,
}: Props) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.rentalIncome`,
  });

  return (
    <div className="rentalIncomeForm subFormSegment">
      <h3>Real Estate Income</h3>
      {fields.map((field, index) => (
        <RentalIncomeItem
          key={field.id}
          register={register}
          tenantIndex={tenantIndex}
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
