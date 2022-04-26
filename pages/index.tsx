import type { NextPage } from "next";
import { LeaseDetailsFormSegment } from "../src/features/LeaseDetailsFormSegment";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="wrapper">
          <LeaseDetailsFormSegment />
        </div>
      </main>
    </div>
  );
};

export default Home;
