import LeaseDetails from "../types/LeaseDetails";
import PropertyHistory from "../types/PropertyHistory";
import Tenant from "../types/Tenant";

export const createLeaseDetails = (): LeaseDetails => ({
  address: "",
  rent: 0,
  startDate: new Date(),
  leasePeriod: 12,
});

export const createPropertyHistory = (): PropertyHistory => ({
  address: "",
  status: "",
  reference: {
    name: "",
    email: "",
    phone: "",
  },
});

export const createTenant = (): Tenant => ({
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

export const createOccupantsSummary = () => {
  return {
    adults: 0,
    children: 0,
    dogs: 0,
    cats: 0,
    otherPets: 0,
  };
};
