import * as Yup from "yup";

export const leaseDetailsValidationSchema = Yup.object({
  address: Yup.string().required(),
  rent: Yup.number().required().positive().integer(),
  startDate: Yup.date().required(),
  leasePeriod: Yup.number().required().positive().integer(),
});
