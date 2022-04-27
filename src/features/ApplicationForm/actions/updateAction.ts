import { ApplicationFormState } from "../types/ApplicationFormState";

export const updateAction = (payload: Partial<ApplicationFormState>) => ({
  type: "update",
  payload,
});
