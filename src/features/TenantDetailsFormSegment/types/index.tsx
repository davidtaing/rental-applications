import { IncomeFormState } from "../../IncomeFormSegment";
import { RentalHistoryFormState } from "../../RentalHistoryFormSegment";

export interface TenantDetails {
  fullname: string;
  gender: string;
  dob: Date;
  mobile: string;
  phone: string;
  email: string;
}

export type Tenant = TenantDetails & IncomeFormState & RentalHistoryFormState;

export interface TenantDetailsFormState {
  tenants: Array<Tenant>;
}
