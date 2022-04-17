export * from "./validationSchema";
import { RentalHistory, RentalHistoryFormState } from "../types";

export const createRentalHistory = (): RentalHistory => ({
  address: "",
  status: "",
  rent: 0,
  frequency: "",
  reference: {
    name: "",
    type: "",
    phone: "",
    email: "",
  },
});

export const initRentalHistoryFormState = (): RentalHistoryFormState => ({
  rentalHistory: new Array<RentalHistory>(createRentalHistory()),
});
