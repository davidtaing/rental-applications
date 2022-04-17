import { IncomeFormState } from "../../IncomeFormSegment";

export interface TenantDetailsFormState {
  tenants: Array<Tenant>;
}

export interface Tenant extends IncomeFormState {
  fullname: string;
  gender: string;
  dob: Date;
  mobile: string;
  phone: string;
  email: string;
}
