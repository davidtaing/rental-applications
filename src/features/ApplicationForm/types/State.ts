import OtherOccupant from "./OtherOccupant";
import Pet from "./Pet";
import Tenant from "./Tenant";

export interface LeaseDetails {
  address: string;
  rent: number;
  startDate: Date;
  leasePeriod: number;
}

export interface OccupantsSummary {
  adults: number;
  children: number;
  dogs: number;
  cats: number;
  otherPets: number;
}

export interface TenantDetails {
  tenants: Array<Tenant>;
}

export interface OtherOccupantsDetails {
  occupants: Array<OtherOccupant>;
}

export interface PetDetails {
  pets: Array<Pet>;
}

export interface ApplicationFormState {
  leaseDetails: LeaseDetails;
  occupantsSummary: OccupantsSummary;
  tenantDetails: TenantDetails;
  otherOccupantsDetails: OtherOccupantsDetails;
  petDetails: PetDetails;
}
