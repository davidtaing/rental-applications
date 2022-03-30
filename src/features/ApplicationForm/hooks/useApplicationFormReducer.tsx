import { useReducer } from "react";

import { initializeState } from "../utils";
import { Actions, ActionType } from "../types/Actions";
import { InitialState } from "../types/State";

function applicationFormReducer(state: InitialState, action: ActionType) {
  switch (action.type) {
    case Actions.update:
      return { ...state, ...action.payload };
    default:
      throw Error;
  }
}

function useApplicationFormReducer(initialState?: InitialState) {
  return useReducer(applicationFormReducer, initialState ?? initializeState());
}

export default useApplicationFormReducer;
