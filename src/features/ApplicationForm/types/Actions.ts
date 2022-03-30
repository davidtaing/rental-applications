export enum Actions {
  "update",
  "reset",
  "submit",
}

export type ActionType =
  | { type: Actions.submit; payload: {} }
  | { type: Actions.reset; payload: {} }
  | { type: Actions.update; payload: {} };
