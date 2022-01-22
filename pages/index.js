import styles from "../styles/Home.module.css";
import work from "../public/work.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.newWrapper}>
        <div>
          <div className={styles.mainNewsCard}>
            <div className={styles.mainNewsCardText}>
              <h2>Wall Street Has Its Worst Week Since March 2020</h2>
              <p>
                Technology stocks have been hit especially hard. The bond market
                is also in disarray. Inflation is red hot and supply chain
                disruptions continue. The recent decline comes as the Federal
                Reserve begins to pull back the enormous stimulus programs it
                began in the early months of the pandemic.
              </p>
            </div>
            <div>
              <Image alt="Work" src={work} />
            </div>
          </div>
          <div className={styles.mainNewsCard}>
            <div className={styles.mainNewsCardText}>
              <div>
                <h2>Wall Street Has Its Worst Week Since March 2020</h2>
                <p>
                  Technology stocks have been hit especially hard. The bond
                  market
                </p>
              </div>
              <div>
                <h2>Wall Street Has Its Worst Week Since March 2020</h2>
                <p>
                  Technology stocks have been hit especially hard. The bond
                  market
                </p>
              </div>
              <div>
                <h2>Wall Street Has Its Worst Week Since March 2020</h2>
                <p>
                  Technology stocks have been hit especially hard. The bond
                  market
                </p>
              </div>
            </div>
            <div>
              <Image alt="Work" src={work} />
            </div>
          </div>
        </div>

        <div className={styles.aside}>
          <div className={styles.mainNewsCardText}>
            <h2>Wall Street Has Its Worst Week Since March 2020</h2>
            <p>
              Technology stocks have been hit especially hard. The bond market
              is also in disarray. Inflation is red hot and supply chain
              disruptions continue. The recent decline comes as the Federal
              Reserve begins to pull back the enormous stimulus programs it
              began in the early months of the pandemic.
            </p>
          </div>
          <div>
            <Image alt="Work" src={work} />
          </div>
        </div>
      </div>
    </div>
  );
}


export const getStaticProps = async ()=>{
  
}