import type { NextPage } from "next";
import { LeaseDetailsFormSegment } from "../src/features/LeaseDetailsFormSegment";
import styles from "../styles/Home.module.css";

const LeaseDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <LeaseDetailsFormSegment />
      </main>
    </div>
  );
};

export default LeaseDetails;
