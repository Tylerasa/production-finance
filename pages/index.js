import styles from "../styles/Home.module.css";
import work from "../public/work.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.newWrapper}>
        <div className={styles.mainNewsCard}>
          <div>
            <h2>
              Wall Street Has Its Worst Week Since March 2020 Technology stocks
            </h2>
            <p>
              have been hit especially hard. The bond market is also in
              disarray. Inflation is red hot and supply chain disruptions
              continue. The recent decline comes as the Federal Reserve begins
              to pull back the enormous stimulus programs it began in the early
              months of the pandemic.
            </p>
          </div>
          <Image alt="Work" src={work} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
