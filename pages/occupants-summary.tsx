import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import OccupantsSummaryForm from "../src/features/OccupantsSummaryForm";

const OccupantsSummary: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <OccupantsSummaryForm />
      </main>
    </div>
  );
};

export default OccupantsSummary;
