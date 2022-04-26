import type { NextPage } from "next";
import { OtherOccupantsFormSegment } from "../src/features/OtherOccupantsFormSegment";
import styles from "../styles/Home.module.css";

const OtherOccupants: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <OtherOccupantsFormSegment />
        </div>
      </main>
    </div>
  );
};

export default OtherOccupants;
