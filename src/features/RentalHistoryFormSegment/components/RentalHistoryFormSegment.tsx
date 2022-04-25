import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { RentalReferenceType, RentalStatus } from "../types";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelectRHF";
import { RentalHistoryItem } from "./RentalHistoryItem";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { createRentalHistory } from "../utils";

interface Props {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}

export function RentalHistoryFormSegment({
  tenantIndex,
  control,
  register,
}: Props) {
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
          tenantIndex={tenantIndex}
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
