import OccupantSummaryForm from "../OccupantSummaryForm";
import LeaseDetailsForm from "../LeaseDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";
import { useReducer } from "react";

const initialState = {
  leaseDetails: {
    address: "",
    rent: 0,
    startDate: Date(),
    leasePeriod: 12,
  },
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
