import { useReducer } from "react";
import { ApplicationFormProvider } from "../contexts/ApplicationFormCtx";
import { ApplicationFormReducer } from "../reducers/ApplicationFormReducer";
import { initApplicationFormState } from "../utils";

interface Props {
  children: React.ReactNode;
}

export function ApplicationForm({ children }: Props) {
  const [state, dispatch] = useReducer(
    ApplicationFormReducer,
    {},
    initApplicationFormState
  );

  return (
    <ApplicationFormProvider value={[state, dispatch]}>
      {children}
    </ApplicationFormProvider>
  );
}
