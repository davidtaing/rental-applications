import type { NextPage } from "next";
import ApplicationForm from "../src/features/ApplicationForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <ApplicationForm />
      </main>
    </div>
  );
};

export default Home;
