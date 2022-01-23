import React from "react";
import styles from "../../styles/Story.module.css";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
const StoryInfo = ({ newInfo }) => {
  console.log(newInfo);
  return (
    <div className={styles.container}>
      {newInfo ? (
        <div>
          <p className={styles.newsInfoText}>
            {newInfo.data.contents[0].content.title}
          </p>
          <div className={styles.mainImageContainer}>
            <Image
              width={1200}
              height={400}
              objectFit="cover"
              alt="Work"
              src={
                newInfo.data.contents[0].content.body.data.partnerData.cover
                  .image.originalUrl
              }
            />
            <p className={styles.caption}>
              {
                newInfo.data.contents[0].content.body.data.partnerData.cover
                  .image.caption
              }
            </p>
          </div>

          <div className={styles.newspaper}>
            {ReactHtmlParser(newInfo.data.contents[0].content.body.markup)}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StoryInfo;

export const getServerSideProps = async (context) => {
  console.log("hell");
  console.log("context", context.params);
  const res = await fetch(
    `https://yh-finance.p.rapidapi.com/news/v2/get-details?uuid=${context.params.id}&region=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "7pgRqEtjPFmshPmiGLuLZBzW6s0Zp1tAgcSjsnqTz8xCOgR6W8",
      },
    }
  );

  const data = await res.json();
  return {
    props: { newInfo: data },
  };
};
