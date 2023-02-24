import React from "react";
import video from "../Kausik_Assets/speedVideo.mp4";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <h1 className={styles.feel}>Feel the speed</h1>
        <h1 className={styles.fiveG}>Fastest 5G</h1>
        <button className={styles.button}>With superfast 5G*</button>
        <h1 className={styles.vlog}>
          Browse our new vlogs &gt; Buy Products &gt;{" "}
        </h1>
      </div>
      <video autoPlay muted loop className={styles.video} width={"100%"}>
        <source src={video} type="Video/mp4" width={"100%"} />
      </video>
    </div>
  );
};

export default Video;
