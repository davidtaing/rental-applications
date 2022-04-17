import { initIncomeFormState } from "../../IncomeFormSegment";
import { Tenant, TenantDetailsFormState } from "../types";

export function initTenantState(): Tenant {
  return {
    fullname: "",
    gender: "",
    dob: new Date(),
    mobile: "",
    phone: "",
    email: "",
    ...initIncomeFormState(),
  };
}

export function initTenantDetailsState(): TenantDetailsFormState {
  return {
    tenants: new Array<Tenant>(initTenantState()),
  };
}
