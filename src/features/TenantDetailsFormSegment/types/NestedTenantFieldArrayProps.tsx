import { Control, UseFormRegister } from "react-hook-form";
import { TenantDetailsFormState } from "..";

/**
 * Defines the properties for nested subforms with field arrays.
 * e.g. EmploymentForm is nested inside TenantForm
 */
export interface NestedTenantFieldArrayProps {
  tenantIndex: number;
  control: Control<TenantDetailsFormState, any>;
  register: UseFormRegister<TenantDetailsFormState>;
}
