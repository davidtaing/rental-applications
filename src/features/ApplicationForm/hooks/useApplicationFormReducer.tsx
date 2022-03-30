import { useReducer } from "react";

import {
  createLeaseDetails,
  createOccupantsSummary,
  createTenant,
} from "../utils";
import { Actions, ActionType } from "../types/Actions";
import { InitialState } from "../types/InitialState";
import Pet from "../types/Pet";
import OtherOccupant from "../types/OtherOccupant";

const initialState: InitialState = {
  leaseDetails: createLeaseDetails(),
  occupantsSummary: createOccupantsSummary(),
  tenantDetails: [createTenant()],
  otherOccupantsDetails: new Array<OtherOccupant>(),
  petDetails: new Array<Pet>(),
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
