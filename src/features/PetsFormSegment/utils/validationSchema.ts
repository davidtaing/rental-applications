import * as Yup from "yup";
import { PetTypes } from "../types";

export const validationSchema = Yup.object().shape({
  pets: Yup.array().of(
    Yup.object().shape({
      type: Yup.mixed<PetTypes>().oneOf(Object.values(PetTypes)).required(),
      amount: Yup.number().required().positive().integer(),
      comment: Yup.string(),
    })
  ),
});
