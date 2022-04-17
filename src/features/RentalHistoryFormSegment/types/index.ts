export enum RentalStatus {
  AGENCY_RENTAL = "Renting with Agency",
  PRIVATE_RENTAL = "Renting with Private Landlord",
  LIVING_WITH_PARENTS = "Living with Parents",
  LIVING_IN_OWN_PROPERTY = "Living in Own Property",
  SHARING = "Sharing",
  CURRENTLY_OVERSEAS = "Currently Overseas",
  JUST_ARRIVED_FROM_OVERSEAS = "Just Arrived from Overseas",
  OTHER = "Other",
}

export enum RentalReferenceType {
  AGENT = "Agent",
  LANDLORD = "Landlord",
  RELATIVE = "Relative",
  FRIEND = "Friend",
}

export interface RentalHistory {
  address: string;
  status: string;
  rent: number;
  frequency: string;
  reference: {
    name: string;
    type: string;
    phone: string;
    email: string;
  };
}

export interface RentalHistoryFormState {
  rentalHistory: Array<RentalHistory>;
}
