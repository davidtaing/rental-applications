import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApplicationFormProvider } from "../src/features/ApplicationForm/contexts/ApplicationFormContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationFormProvider>
      <Component {...pageProps} />
    </ApplicationFormProvider>
  );
}

export default MyApp;
