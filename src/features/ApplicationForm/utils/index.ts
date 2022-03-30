import PropertyHistory from "../types/PropertyHistory";
import { InitialState, LeaseDetails } from "../types/State";
import Pet from "../types/Pet";
import Tenant from "../types/Tenant";
import OtherOccupant from "../types/OtherOccupant";

export const createLeaseDetails = (): LeaseDetails => ({
  address: "",
  rent: 0,
  startDate: new Date(),
  leasePeriod: 12,
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

export const createPropertyHistory = (): PropertyHistory => ({
  address: "",
  status: "",
  reference: {
    name: "",
    email: "",
    phone: "",
  },
});

export const createOtherOccupant = (): OtherOccupant => ({
  fullname: "",
  gender: "",
  age: 0,
});

export const createPet = (): Pet => ({ type: "", breed: "", description: "" });

export const createTenantDetails = () => ({
  tenants: [createTenant()],
});

export const createOtherOccupantDetails = () => ({
  occupants: new Array<OtherOccupant>(),
});

export const createPetDetails = () => ({
  pets: new Array<Pet>(),
});

/**
 * Initializes state.
 * @returns InitialState for useApplicationFormReducer
 */
export const initializeState = (): InitialState => {
  return {
    leaseDetails: createLeaseDetails(),
    occupantsSummary: createOccupantsSummary(),
    tenantDetails: createTenantDetails(),
    otherOccupantsDetails: createOtherOccupantDetails(),
    petDetails: createPetDetails(),
  };
};
