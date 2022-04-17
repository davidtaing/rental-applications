import * as Yup from "yup";
import { PaymentFrequency } from "../../../types/PaymentFrequency";
import { EmploymentType } from "../types";

export const employmentItemSchema = Yup.object().shape({
  title: Yup.string().required(),
  compony: Yup.string().required(),
  type: Yup.mixed<EmploymentType>().oneOf(Object.values(EmploymentType)),
  amount: Yup.number().required().positive().integer(),
  reference: Yup.object().shape({
    name: Yup.string().required(),
    position: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
  }),
});

export const incomeSupportItemSchema = Yup.object().shape({
  description: Yup.string().required(),
  amount: Yup.number().required().positive().integer(),
  frequency: Yup.mixed<PaymentFrequency>().oneOf(
    Object.values(PaymentFrequency)
  ),
});

export const realEstateIncomeItemSchema = Yup.object().shape({
  address: Yup.string().required(),
  rent: Yup.number().required().positive().integer(),
  frequency: Yup.mixed<PaymentFrequency>().oneOf(
    Object.values(PaymentFrequency)
  ),
});

export const incomeFormSchema = Yup.object().shape({
  employment: Yup.array().of(employmentItemSchema),
  incomeSupport: Yup.array().of(incomeSupportItemSchema),
  realEstate: Yup.array().of(realEstateIncomeItemSchema),
});
