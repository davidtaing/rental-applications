import { Dispatch } from "react";
import LeaseDetails from "../../../types/LeaseDetails";

export interface InitialState {
  leaseDetails: LeaseDetails;
  occupantSummary: {};
  tenantDetails: {};
  otherOccupantDetails: {};
  petDetails: {};
}

export enum Actions {
  "update",
  "reset",
  "submit",
}

export type ActionType =
  | { type: Actions.submit; payload: {} }
  | { type: Actions.reset; payload: {} }
  | { type: Actions.update; payload: {} };

export type ApplicationFormDispatch = Dispatch<ActionType>;
