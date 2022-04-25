import { Control, UseFormRegister } from "react-hook-form";
import { GenderSelect } from "../../../components/common/GenderSelect";
import { LabelledInput } from "../../../components/common/LabelledInput";
import {
  EmploymentHistoryFormSegment,
  IncomeSupportFormSegment,
  RentalIncomeFormSegment,
} from "../../IncomeFormSegment";
import { RentalHistoryFormSegment } from "../../RentalHistoryFormSegment";
import { TenantDetailsFormState } from "../types";

interface Props {
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
  tenantIndex: number;
}

export function TenantItem({ control, register, tenantIndex }: Props) {
  return (
    <div className="tenantItem">
      <h2>Tenant</h2>
      <LabelledInput
        label="Fullname:"
        registerReturn={register(`tenants.${tenantIndex}.fullname`)}
      />
      <GenderSelect
        registerReturn={register(`tenants.${tenantIndex}.gender`)}
      />
      <LabelledInput
        type="date"
        label="Date of Birth:"
        registerReturn={register(`tenants.${tenantIndex}.dob`)}
      />
      <LabelledInput
        label="Mobile:"
        registerReturn={register(`tenants.${tenantIndex}.mobile`)}
      />
      <LabelledInput
        label="Phone:"
        registerReturn={register(`tenants.${tenantIndex}.phone`)}
      />
      <LabelledInput
        label="Email:"
        registerReturn={register(`tenants.${tenantIndex}.email`)}
      />
      <EmploymentHistoryFormSegment
        tenantIndex={tenantIndex}
        control={control}
        register={register}
      />
      <IncomeSupportFormSegment
        tenantIndex={tenantIndex}
        control={control}
        register={register}
      />
      <RentalIncomeFormSegment
        tenantIndex={tenantIndex}
        control={control}
        register={register}
      />
      <RentalHistoryFormSegment
        tenantIndex={tenantIndex}
        control={control}
        register={register}
      />
    </div>
  );
}
