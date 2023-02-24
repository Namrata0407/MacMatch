import React from "react";
import macbook from "../Kausik_Assets/homepod.jpg";
import watch from "../Kausik_Assets/ipadpro.jpg";
import styles from "./TwoImages2.module.css";

const TwoImages2 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading}>HomePod</h1>
            <h1 className={styles.subHeading}>Profound sound.</h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>

          <img src={macbook} alt="" className={styles.img} />
        </div>
        {/* 2nd image */}
        <div style={{ border: "1px solid black transparent" }}>
          <div className={styles.container}>
            <h1 className={styles.heading}>iPad Pro</h1>
            <h1 className={styles.subHeading} style={{ color: "orange" }}>
              Supercharged by M2
            </h1>
            <h1 className={styles.subHeading}>Adventutr Awaits.</h1>
            <h1 className={styles.lmb}>Learn more &gt; Buy &gt; </h1>
          </div>

          <img src={watch} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default TwoImages2;
