import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import LeaseDetailsForm from "../src/features/LeaseDetailsForm";

const LeaseDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <LeaseDetailsForm />
      </main>
    </div>
  );
};

export default LeaseDetails;
