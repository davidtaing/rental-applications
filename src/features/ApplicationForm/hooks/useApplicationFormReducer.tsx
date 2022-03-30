import { useReducer } from "react";

import { createLeaseDetails } from "../utils";
import { Actions, ActionType } from "../types/Actions";
import { InitialState } from "../types/InitialState";

const initialState: InitialState = {
  leaseDetails: createLeaseDetails(),
  occupantSummary: {},
  tenantDetails: {},
  otherOccupantDetails: {},
  petDetails: {},
};

function applicationFormReducer(
  state: typeof initialState,
  action: ActionType
) {
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
