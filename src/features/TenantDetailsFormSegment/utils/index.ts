import { initIncomeFormState } from "../../IncomeFormSegment";
import { initRentalHistoryFormState } from "../../RentalHistoryFormSegment";
import { Tenant, TenantDetailsFormState } from "../types";

export function createTenant(): Tenant {
  return {
    fullname: "",
    gender: "",
    dob: new Date(),
    mobile: "",
    phone: "",
    email: "",
    ...initIncomeFormState(),
    ...initRentalHistoryFormState(),
  };
}

export function initTenantDetailsFormState(): TenantDetailsFormState {
  return {
    tenants: new Array<Tenant>(createTenant()),
  };
}
