import { ApplicationFormDispatch } from "../types/Dispatch";
import { ApplicationFormState } from "../types/State";

import createCtx from "../../../contexts/createCtx";

export const [useApplicationFormCtx, ApplicationFormProvider] =
  createCtx<[ApplicationFormState, ApplicationFormDispatch]>();
