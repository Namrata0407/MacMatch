import { Heading } from "@chakra-ui/react";
import React from "react";
import video from "../Kausik_Assets/speedVideo.mp4";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.allHeading}>
        <Heading textAlign={'center'} fontSize={'60px'} fontWeight={'semibold'}>Feel the speed</Heading>
        <Heading textAlign={'center'} fontSize={'4xl'} fontWeight={'semibold'} mt={'10px'}>Fastest 5G</Heading>
        <button className={styles.button}>With superfast 5G*</button>
        <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'normal'} color={'white'}>Browse our new vlogs &gt; Buy Products &gt; </Heading>
      </div>
      <video autoPlay muted loop className={styles.video}  width={'100%'}>
        <source src={video} type="Video/mp4" width={'100%'}/>
      </video>
    </div>
  );
};

export default Video;
