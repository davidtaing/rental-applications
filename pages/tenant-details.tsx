import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import TenantDetailsForm from "../src/features/TenantDetailsForm";

const TenantDetails: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <TenantDetailsForm />
      </main>
    </div>
  );
};

export default TenantDetails;
