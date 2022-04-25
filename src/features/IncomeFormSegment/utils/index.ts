export * from "./validationSchema";
import {
  Employment,
  IncomeSupport,
  RentalIncome,
  IncomeFormState,
} from "../types";

export const createEmployment = (): Employment => ({
  title: "",
  company: "",
  type: "",
  amount: 0,
  frequency: "",
  reference: {
    name: "",
    position: "",
    phone: "",
    email: "",
  },
});

export const createIncomeSupport = (): IncomeSupport => ({
  description: "",
  amount: 0,
  frequency: "",
});

export const createRentalIncome = (): RentalIncome => ({
  address: "",
  rent: 0,
  frequency: "",
});

export const initIncomeFormState = (): IncomeFormState => ({
  employment: new Array<Employment>(),
  incomeSupport: new Array<IncomeSupport>(),
  rentalIncome: new Array<RentalIncome>(),
});
