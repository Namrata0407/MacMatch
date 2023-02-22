import { Heading } from "@chakra-ui/react";
import React from "react";
import iPhone from "../Kausik_Assets/iPhone14pro.jpg";
import styles from "./Iphone14pro.module.css";

const Iphone14pro = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <Heading textAlign={'center'} fontSize={'50px'} fontWeight={'semibold'}>iPhone 14 PRO</Heading>
        <Heading textAlign={'center'} fontSize={'2xl'} fontWeight={'semibold'} mt={'10px'}>Pro. Beyond</Heading>
        <button className={styles.button}>With superfast 5G*</button>
        <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'normal'} color={'blue.600'}>Learn more &gt; Buy &gt; </Heading>
      </div>
      <img src={iPhone} alt="iphone" width={'100%'} />
    </div>
  );
};

export default Iphone14pro;
