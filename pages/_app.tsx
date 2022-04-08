import "../styles/globals.css";
import type { AppProps } from "next/app";
import ApplicationForm from "../src/features/ApplicationForm";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationForm>
      <Component {...pageProps} />
    </ApplicationForm>
  );
}

export default MyApp;
