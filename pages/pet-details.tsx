import type { NextPage } from "next";
import { FormNavigation } from "../src/features/FormNavigation";
import { PetsFormSegment } from "../src/features/PetsFormSegment";
import styles from "../styles/Home.module.css";

const PetDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <PetsFormSegment />
        </div>
      </main>
    </div>
  );
};

export default PetDetails;
