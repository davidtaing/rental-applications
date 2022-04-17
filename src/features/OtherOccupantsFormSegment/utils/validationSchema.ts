import * as Yup from "yup";
import { OtherOccupantRelation } from "../types";

export const otherOccupantsFormSchema = Yup.object().shape({
  otherOccupants: Yup.array().of(
    Yup.object().shape({
      fullname: Yup.string().required(),
      relation: Yup.mixed<OtherOccupantRelation>()
        .oneOf(Object.values(OtherOccupantRelation))
        .required(),
      age: Yup.number().required().positive().integer(),
      gender: Yup.string().required(),
    })
  ),
});
