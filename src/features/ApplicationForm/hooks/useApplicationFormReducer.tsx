import { useReducer } from "react";

import { initializeState } from "../utils";
import { Actions, ActionType } from "../types/Actions";
import { InitialState } from "../types/State";

const initialState: InitialState = initializeState();

function applicationFormReducer(state: InitialState, action: ActionType) {
  switch (action.type) {
    case Actions.update:
      return { ...state, ...action.payload };
    default:
      throw Error;
  }
}

function useApplicationFormReducer() {
  return useReducer(applicationFormReducer, initialState);
}

export default useApplicationFormReducer;
