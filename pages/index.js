import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      {news ? (
        <div className={styles.newWrapper}>
          <div>
            <div className={styles.mainNewsCard}>
              <div className={styles.mainNewsCardText}>
                <h2>{news.data.main.stream[0].content.title}</h2>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  // width={600}
                  // height={300}
                  layout="fill"

                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[2].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
            <div className={styles.mainNewsCard}>
              <div className={styles.mainNewsCardText}>
                <div>
                  <Link href={`/story/${news.data.main.stream[1].id}`}>
                    <a>
                      <h2>{news.data.main.stream[1].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[2].id}`}>
                    <a>
                      <h2>{news.data.main.stream[2].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[3].id}`}>
                    <a>
                      <h2>{news.data.main.stream[3].content.title}</h2>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[1].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
            <div className={styles.mainNewsCard}>
              <div className={styles.mainNewsCardText}>
                <div>
                  <Link href={`/story/${news.data.main.stream[4].id}`}>
                    <a>
                      <h2>{news.data.main.stream[4].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[5].id}`}>
                    <a>
                      <h2>{news.data.main.stream[5].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[6].id}`}>
                    <a>
                      <h2>{news.data.main.stream[6].content.title}</h2>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[4].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
            <div className={styles.mainNewsCard}>
              <div className={styles.mainNewsCardText}>
                <div>
                  <Link href={`/story/${news.data.main.stream[7].id}`}>
                    <a>
                      <h2>{news.data.main.stream[7].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[8].id}`}>
                    <a>
                      <h2>{news.data.main.stream[8].content.title}</h2>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={`/story/${news.data.main.stream[9].id}`}>
                    <a>
                      <h2>{news.data.main.stream[9].content.title}</h2>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                {/* <Image alt="Work" src={work} /> */}

                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[7].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles.aside}>
            <div className={styles.asideSeperator}>
              <div className={styles.mainNewsCardText}>
                <h2>{news.data.main.stream[8].content.title}</h2>
              </div>
              <div style={{ height: "200px" }} className={styles.imageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[8].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
            <div className={styles.asideSeperator}>
              <div className={styles.mainNewsCardText}>
                <h2>{news.data.main.stream[9].content.title}</h2>
              </div>
              <div style={{ height: "200px" }} className={styles.imageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[9].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
            <div className={styles.asideSeperator}>
              <div className={styles.mainNewsCardText}>
                <h2>{news.data.main.stream[10].content.title}</h2>
              </div>
              <div style={{ height: "200px" }} className={styles.imageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Work"
                  src={
                    news.data.main.stream[10].content.thumbnail.resolutions[3]
                      .url
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://yh-finance.p.rapidapi.com/news/v2/list?region=US&snippetCount=28",
    {
      method: "POST",
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "7pgRqEtjPFmshPmiGLuLZBzW6s0Zp1tAgcSjsnqTz8xCOgR6W8",
      },
    }
  );
  const data = await res.json();
  return {
    props: { news: data },
  };
};
