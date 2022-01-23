import React from "react";
import styles from "../../styles/Story.module.css";

const StoryInfo = ({ newInfo }) => {
  console.log(newInfo);

  return (
    <div className={styles.container}>
      {newInfo ? newInfo.data.contents[0].content.body.markup : null}
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
