import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { createIncomeSupport } from "../utils";
import { IncomeSupportItem } from "./IncomeSupportItem";

interface Props {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}

export function IncomeSupportFormSegment({
  tenantIndex,
  control,
  register,
}: Props) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `tenants.${tenantIndex}.incomeSupport`,
  });

  return (
    <div className="incomeSupportForm subFormSegment">
      <h2>Income Support</h2>
      {fields.map((field, index) => (
        <IncomeSupportItem
          key={field.id}
          register={register}
          tenantIndex={tenantIndex}
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
