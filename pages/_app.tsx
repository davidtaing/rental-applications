import "../styles/globals.css";
import type { AppProps } from "next/app";
import useApplicationFormReducer from "../src/features/ApplicationForm/hooks/useApplicationFormReducer";
import { ApplicationFormProvider } from "../src/features/ApplicationForm/contexts/ApplicationFormContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useApplicationFormReducer();

  return (
    <ApplicationFormProvider value={[state, dispatch]}>
      <Component {...pageProps} />
    </ApplicationFormProvider>
  );
}

export default MyApp;
