import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  otherOccupants: Yup.array().of(
    Yup.object().shape({
      // fullname
      // relation
      // age
      // gender
    })
  ),
});
