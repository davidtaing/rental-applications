import * as Yup from "yup";
import { Gender } from "../../../types/Gender";
import {
  employmentItemSchema,
  incomeSupportItemSchema,
  realEstateIncomeItemSchema,
} from "../../IncomeFormSegment";

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required(),
  gender: Yup.mixed<Gender>().oneOf(Object.values(Gender)),
  dob: Yup.string().required(),
  mobile: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().email().required(),
  employment: Yup.array().of(employmentItemSchema),
  incomeSupport: Yup.array().of(incomeSupportItemSchema),
  realEstate: Yup.array().of(realEstateIncomeItemSchema),
});
