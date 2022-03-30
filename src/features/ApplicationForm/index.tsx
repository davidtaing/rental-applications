import OccupantSummaryForm from "../OccupantSummaryForm";
import LeaseDetailsForm from "../LeaseDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";
import { Dispatch, useReducer } from "react";
import LeaseDetails from "../../types/LeaseDetails";
import { createLeaseDetails } from "../../utils";

interface InitialState {
  leaseDetails: LeaseDetails;
  occupantSummary: {};
  tenantDetails: {};
  otherOccupantDetails: {};
  petDetails: {};
}

const initialState: InitialState = {
  leaseDetails: createLeaseDetails(),
  occupantSummary: {},
  tenantDetails: {},
  otherOccupantDetails: {},
  petDetails: {},
};

export enum Actions {
  "update",
  "reset",
  "submit",
}

type ActionType =
  | { type: Actions.submit; payload: {} }
  | { type: Actions.reset; payload: {} }
  | { type: Actions.update; payload: {} };

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

export type ApplicationFormDispatch = Dispatch<ActionType>;

function ApplicationForm() {
  const [state, dispatch] = useReducer(applicationFormReducer, initialState);
  const {
    leaseDetails,
    occupantSummary,
    tenantDetails,
    otherOccupantDetails,
    petDetails,
  } = state;

  return (
    <div>
      <LeaseDetailsForm initialValues={leaseDetails} dispatch={dispatch} />
      <OccupantSummaryForm />
      <TenantDetailsForm />
      <OtherOccupantsForm />
    </div>
  );
}

export default ApplicationForm;
