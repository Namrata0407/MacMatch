import React from "react";
import iPhone from "../Kausik_Assets/iPhone14pro.jpg";
import styles from "./Iphone14pro.module.css";

const Iphone14pro = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <h1  className={styles.pro}>iPhone 14 PRO</h1>
        <h1 className={styles.beyond}>Pro. Beyond</h1>
        <button className={styles.button}>With superfast 5G*</button>
        <h1 className={styles.lmbm}>Learn more &gt; Buy &gt; </h1>
      </div>
      <img src={iPhone} alt="iphone" width={'100%'} />
    </div>
  );
};

export default Iphone14pro;
