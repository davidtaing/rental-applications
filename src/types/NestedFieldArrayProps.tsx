import { Control, UseFormRegister } from "react-hook-form";

/**
 * Defines the properties for nested subforms with field arrays.
 * e.g. EmploymentForm is nested inside TenantForm
 */
export interface NestedFieldArrayProps<T> {
  index: number;
  control: Control<T, any>;
  register: UseFormRegister<T>;
}
