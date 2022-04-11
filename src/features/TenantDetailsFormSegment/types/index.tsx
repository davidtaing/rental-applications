export interface TenantDetailsFormState {
  tenants: Array<Tenant>;
}

export interface Tenant {
  fullname: string;
  gender: string;
  dob: Date;
  mobile: string;
  phone: string;
  email: string;
}
