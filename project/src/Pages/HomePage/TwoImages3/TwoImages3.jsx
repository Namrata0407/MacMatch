import { Heading } from "@chakra-ui/react";
import React from "react";
import macbook from '../Kausik_Assets/watchseries8.jpg'
import watch from '../Kausik_Assets/ipad.jpg'

const TwoImages3 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black transparent" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              marginTop: "50px",
              width: "25%",
              border: "1px solid cyan transparent",
              marginLeft:'12.5%'
            }}
          >
            <Heading textAlign={'center'} fontSize={'40px'} fontWeight={'semibold'}>WATCH</Heading>
            <Heading textAlign={'center'} fontSize={'14px'} fontWeight={'semibold'} color={'orange'}>SERIES 8</Heading>
            <Heading textAlign={'center'} fontSize={'xl'} fontWeight={'normal'} mt={'10px'}>A healthy leap ahead.</Heading>
            <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'normal'} color={'blue.600'}>Learn more &gt; Buy &gt; </Heading>
          </div>

          <img
            src={macbook}
            alt=""
            style={{ height: "550px", border: "5px solid white" }}
          />
        </div>
        <div style={{ border: "1px solid black transparent" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              marginTop: "50px",
              width: "25%",
              border: "1px solid cyan transparent",
              marginLeft:'12.5%'
            }}
          >
            <Heading textAlign={'center'} fontSize={'40px'} fontWeight={'semibold'} color={'black'}>iPad</Heading>
            <Heading textAlign={'center'} fontSize={'xl'} fontWeight={'normal'} mt={'10px'} color={'black'}>Lovable. Drawable. Magical.</Heading>
            <Heading mt={'10px'} textAlign={'center'} fontSize={'2xl'} fontWeight={'normal'} color={'blue.600'}>Learn more &gt; Buy &gt; </Heading>
          </div>

          <img
            src={watch}
            alt=""
            style={{ height: "550px", border: "5px solid white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoImages3;
