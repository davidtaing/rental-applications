import type { NextPage } from "next";
import { FormNavigation } from "../src/features/FormNavigation";
import { TenantDetailsFormSegment } from "../src/features/TenantDetailsFormSegment";
import styles from "../styles/Home.module.css";

const TenantDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <TenantDetailsFormSegment />
          <FormNavigation prevUrl="/lease-details" nextUrl="/other-occupants" />
        </div>
      </main>
    </div>
  );
};

export default TenantDetails;
