import React from "react";
import macbook from "../Kausik_Assets/watchseries8.jpg";
import watch from "../Kausik_Assets/ipad.jpg";
import styles from "./TwoImages3.module.css";

const TwoImages3 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading}>WATCH</h1>
            <h1 className={styles.subHeading} style={{ color: "orange" }}>
              SERIES 8
            </h1>
            <h1 className={styles.subHeading}>A healthy leap ahead.</h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>

          <img src={macbook} alt="" className={styles.img} />
        </div>
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading} style={{ color: "black" }}>
              iPad
            </h1>
            <h1 className={styles.subHeading} style={{ color: "black" }}>
              Lovable. Drawable. Magical.
            </h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>

          <img src={watch} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default TwoImages3;
