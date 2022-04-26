import { Dispatch } from "react";
import createCtx from "../../../contexts/createCtx";
import { Action } from "../../../types/Action";
import { ApplicationFormState } from "../types/ApplicationFormState";

type ContextProps = [values: ApplicationFormState, dispatch: Dispatch<Action>];
export const [useApplicationFormCtx, ApplicationFormProvider] =
  createCtx<ContextProps>();
