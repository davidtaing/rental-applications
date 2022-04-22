import type { NextPage } from "next";
import { FormNavigation } from "../src/features/FormNavigation";
import { LeaseDetailsFormSegment } from "../src/features/LeaseDetailsFormSegment";
import styles from "../styles/Home.module.css";

const LeaseDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <LeaseDetailsFormSegment />
          <FormNavigation nextUrl="/tenant-details" />
        </div>
      </main>
    </div>
  );
};

export default LeaseDetails;
