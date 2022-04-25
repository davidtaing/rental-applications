import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
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
    name: `tenants.${tenantIndex}.employment`,
  });

  return (
    <div className="incomeSupportForm subFormSegment">
      <h2>Income Support</h2>
      {fields.map((field, index) => (
        <div key={field.id}>
          <h3>Payment</h3>
        </div>
      ))}
    </div>
  );
}
