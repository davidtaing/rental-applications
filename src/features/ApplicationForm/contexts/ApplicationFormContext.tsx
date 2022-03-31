import { createContext } from "react";
import useApplicationFormReducer from "../hooks/useApplicationFormReducer";
import { ApplicationFormDispatch } from "../types/Dispatch";
import { ApplicationFormState } from "../types/State";

export const ApplicationFormContext = createContext<
  [ApplicationFormState, ApplicationFormDispatch] | null
>(null);

interface ApplicationFormProviderProps {
  children: React.ReactNode;
}

export function ApplicationFormProvider({
  children,
}: ApplicationFormProviderProps) {
  const [state, dispatch] = useApplicationFormReducer();

  return (
    <ApplicationFormContext.Provider value={[state, dispatch]}>
      {children}
    </ApplicationFormContext.Provider>
  );
}
