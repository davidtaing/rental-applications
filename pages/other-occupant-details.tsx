import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import OtherOccupantsForm from "../src/features/OtherOccupantsForm";

const OtherOccupantDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <OtherOccupantsForm />
      </main>
    </div>
  );
};

export default OtherOccupantDetails;
