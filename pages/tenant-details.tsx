import type { NextPage } from "next";
import { TenantDetailsFormSegment } from "../src/features/TenantDetailsFormSegment";
import styles from "../styles/Home.module.css";

const TenantDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <TenantDetailsFormSegment />
        </div>
      </main>
    </div>
  );
};

export default TenantDetails;
