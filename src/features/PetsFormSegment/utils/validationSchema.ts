import * as Yup from "yup";
import { PetType } from "../types";

export const petsFormSchema = Yup.object().shape({
  pets: Yup.array().of(
    Yup.object().shape({
      type: Yup.mixed<PetType>().oneOf(Object.values(PetType)).required(),
      amount: Yup.number().required().positive().integer(),
      comment: Yup.string(),
    })
  ),
});
