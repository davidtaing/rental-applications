export interface LeaseDetails {
  address: string;
  rent: number;
  startDate: Date;
  period: number;
}

export interface LeaseDetailsFormState {
  leaseDetails: LeaseDetails;
}
