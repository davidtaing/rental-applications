import { UseFormRegister } from "react-hook-form";

export interface NestedFieldItemProps<T> {
  register: UseFormRegister<T>;
  parentIndex: number;
  index: number;
}
