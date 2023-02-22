import { Heading } from "@chakra-ui/react";
import React from "react";
import iPhone from "../Kausik_Assets/iPhone14.jpg";
import styles from "./Iphone14.module.css";

const Iphone14= () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <Heading textAlign={'center'} fontSize={'5xl'} fontWeight={'semibold'}>iPhone 14</Heading>
        <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'semibold'}>Pro. Beyond</Heading>
        <button className={styles.button}>With superfast 5G*</button>
        <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'normal'} color={'blue.600'}>Learn more &gt; Buy &gt; </Heading>
      </div>
      <img src={iPhone} alt="iphone" width={'100%'}/>
    </div>
  );
};

export default Iphone14;
