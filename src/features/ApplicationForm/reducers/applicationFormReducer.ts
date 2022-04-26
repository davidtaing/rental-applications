import { Action } from "../../../types/Action";
import { ApplicationFormState } from "../types/ApplicationFormState";

export function ApplicationFormReducer(
  state: ApplicationFormState,
  action: Action
) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    default:
      throw new Error("Something went wrong with ApplicationForm reducer.");
  }
}
