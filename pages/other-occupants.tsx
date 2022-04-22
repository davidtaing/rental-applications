import type { NextPage } from "next";
import { FormNavigation } from "../src/features/FormNavigation";
import { OtherOccupantsFormSegment } from "../src/features/OtherOccupantsFormSegment";
import styles from "../styles/Home.module.css";

const OtherOccupants: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <OtherOccupantsFormSegment />
          <FormNavigation prevUrl="/tenant-details" nextUrl="/pet-details" />
        </div>
      </main>
    </div>
  );
};

export default OtherOccupants;
