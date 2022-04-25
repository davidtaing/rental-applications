import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { createRealEstateIncome } from "../utils";
import { RealEstateIncomeItem } from "./RealEstateIncomeItem";

interface Props {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}

export function RealEstateIncomeFormSegment({
  tenantIndex,
  control,
  register,
}: Props) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.realEstateIncome`,
  });

  return (
    <div className="realEstateIncomeForm subFormSegment">
      <h2>Real Estate Income</h2>
      {fields.map((field, index) => (
        <RealEstateIncomeItem
          key={field.id}
          register={register}
          tenantIndex={tenantIndex}
          index={index}
        />
      ))}
      <FieldArrayButtons
        append={append}
        remove={remove}
        createItemFn={createRealEstateIncome}
        arrayLength={fields.length}
      />
    </div>
  );
}
