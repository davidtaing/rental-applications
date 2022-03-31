import { useReducer } from "react";

import { initializeState } from "../utils";
import { Actions, ActionType } from "../types/Actions";
import { ApplicationFormState } from "../types/State";

function applicationFormReducer(
  state: ApplicationFormState,
  action: ActionType
) {
  switch (action.type) {
    case Actions.update:
      return { ...state, ...action.payload };
    default:
      throw Error;
  }
}

function useApplicationFormReducer(initialState?: ApplicationFormState) {
  return useReducer(applicationFormReducer, initialState ?? initializeState());
}

export default useApplicationFormReducer;
