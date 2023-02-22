import { Heading } from "@chakra-ui/react";
import React from "react";
import macbook from '../Kausik_Assets/homepod.jpg'
import watch from '../Kausik_Assets/ipadpro.jpg'

const TwoImages2 = () => {
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
            <Heading textAlign={'center'} fontSize={'40px'} fontWeight={'semibold'}>HomePod</Heading>
            <Heading textAlign={'center'} fontSize={'xl'} fontWeight={'normal'} mt={'10px'}>Profound sound.</Heading>
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
            <Heading textAlign={'center'} fontSize={'40px'} fontWeight={'semibold'}>iPad Pro</Heading>
            <Heading textAlign={'center'} fontSize={'14px'} fontWeight={'semibold'} color={'orange'}>Supercharged by M2</Heading>
            <Heading textAlign={'center'} fontSize={'xl'} fontWeight={'normal'} mt={'10px'} >Adventutr Awaits.</Heading>
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

export default TwoImages2;
