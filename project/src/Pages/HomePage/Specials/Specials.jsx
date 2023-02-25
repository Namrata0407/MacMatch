import React from "react";
import special from "../Kausik_Assets/special.jpg";
import styles from "./Specials.module.css";

const Specials = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <h1  className={styles.pro}>Explore our specials</h1>
        <h1 className={styles.beyond}>Events</h1>
        <button className={styles.button}>lightening fast</button>
      </div>
      <img src={special} alt="iphone" width={'100%'}/>
    </div>
  );
};

export default Specials;
