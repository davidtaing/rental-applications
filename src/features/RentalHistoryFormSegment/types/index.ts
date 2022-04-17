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
