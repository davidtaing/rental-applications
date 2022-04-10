import * as Yup from "yup";

export interface LeaseDetailsState {
  address: string;
  rent: number;
  startDate: Date;
  leasePeriod: number;
}

export const validationSchema = Yup.object({
  address: Yup.string().required(),
  rent: Yup.number().required().positive().integer(),
  startDate: Yup.date().required(),
  leasePeriod: Yup.number().required().positive().integer(),
});
