import PropertyHistory from "../types/PropertyHistory";
import TenantDetails from "../types/TenantInterface";

export const createPropertyHistory = (): PropertyHistory => ({
  address: "",
  status: "",
  reference: {
    name: "",
    email: "",
    phone: "",
  },
});

export const createTenant = (): TenantDetails => ({
  preferredName: "",
  fullname: "",
  gender: "",
  dob: new Date(), //TODO: convert to date
  phone: "",
  mobile: "",
  email: "",
  propertyHistory: [createPropertyHistory()],
  employment: {
    title: "",
    type: "",
    netIncome: 0,
    payPeriod: "",
    reference: {
      name: "",
      position: "",
      email: "",
      phone: "",
    },
  },
});
