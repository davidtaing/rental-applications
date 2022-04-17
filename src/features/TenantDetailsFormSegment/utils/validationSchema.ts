import * as Yup from "yup";
import { Gender } from "../../../types/Gender";
import { incomeFormSchema } from "../../IncomeFormSegment";

export const tenantDetailsSchema = Yup.object()
  .shape({
    fullname: Yup.string().required(),
    gender: Yup.mixed<Gender>().oneOf(Object.values(Gender)),
    dob: Yup.string().required(),
    mobile: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
  })
  .concat(incomeFormSchema);
