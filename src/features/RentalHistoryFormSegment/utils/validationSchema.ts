import * as Yup from "yup";
import { PaymentFrequency } from "../../../types/PaymentFrequency";
import { RentalReferenceType, RentalStatus } from "../types";

const rentalHistorySchema = Yup.object().shape({
  address: Yup.string().required(),
  status: Yup.mixed<RentalStatus>().oneOf(Object.values(RentalStatus)),
  rent: Yup.number().required().positive().integer(),
  frequency: Yup.mixed<PaymentFrequency>().oneOf(
    Object.values(PaymentFrequency)
  ),
  reference: Yup.object().shape({
    name: Yup.string().required(),
    status: Yup.mixed<RentalReferenceType>().oneOf(
      Object.values(RentalReferenceType)
    ),
    phone: Yup.string().required(),
    email: Yup.string().email(),
  }),
});

export const rentalHistoryFormSchema = Yup.object().shape({
  rentalHistory: Yup.array().of(rentalHistorySchema),
});
