import React from "react";
import macbook from "../Kausik_Assets/Macbook.jpg";
import watch from "../Kausik_Assets/watchultra.jpg";
import styles from "./TwoImages.module.css";

const TwoImages = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading}>MacBook Pro</h1>
            <h1 className={styles.subHeading}>
              Supercharged by M2 Pro and M2 Max.
            </h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>
          <img src={macbook} alt="laptop" className={styles.img} />
        </div>
        {/* 2nd image */}
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading} style={{ color: "black" }}>
              WATCH
            </h1>
            <h1 className={styles.subHeading} style={{ color: "orange" }}>
              ULTRA
            </h1>
            <h1 className={styles.subHeading} style={{ color: "black" }}>
              Adventutr Awaits.
            </h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>

          <img src={watch} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default TwoImages;
