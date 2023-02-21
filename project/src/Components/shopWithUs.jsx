import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTruckMoving } from "react-icons/fa";

import { BsFillEmojiLaughingFill,BsApple } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
const ShopWithUs = () => {
  return (
  <Box m="auto" w="100%" display="flex" bg="#f5f5f7" p="20px"  flexWrap={"wrap"} gap="15px" fontWeight={"600"}>
<Box m="auto" bg="white" w="312px" h="240px" display="flex" flexDirection={"column"} justifyContent="flex-start" alignItems="center" p="20px" border="4px solid white" borderRadius={"15px"} box-shadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' >
<Box w="100%" h="80px" display="flex" justifyContent={"flex-start"}>
<FaTruckMoving fontSize={"40px"}  color="#6cca4e"/>
</Box>
<Box w="100%" h="160px" display="flex" justifyContent={"flex-start"}>
<Text fontSize={"24px"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
Enjoy <span style={{color:"green"}}>two-hour</span> delivery from an Apple Store, <span style={{color:"green"}}>free delivery,</span> or <span style={{color:"green"}}>easy pickup.²</span>
</Text>
</Box>
</Box>


<Box bg="white" m="auto" w="312px" h="240px" display="flex" flexDirection={"column"} justifyContent="flex-start" alignItems="center" p="20px" border="4px solid white" borderRadius={"15px"} box-shadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' >
<Box w="100%" h="80px" display="flex" justifyContent={"flex-start"}>
<BsLaptop fontSize={"40px"}  color="#ab45fb"/>
</Box>
<Box w="100%" h="160px" display="flex" justifyContent={"flex-start"}>
<Text fontSize={"24px"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
<span style={{color:"#ab45fb"}}>Trade in your current device.</span> Get credit toward a new one.<sup>3</sup>
</Text>
</Box>
</Box>


<Box bg="white" m="auto" w="312px" h="240px" display="flex" flexDirection={"column"} justifyContent="flex-start" alignItems="center" p="20px" border="4px solid white" borderRadius={"15px"} box-shadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' >
<Box w="100%" h="80px" display="flex" justifyContent={"flex-start"}>
<AiFillCreditCard fontSize={"40px"}  color="#6cca4e"/>
</Box>
<Box w="100%" h="160px" display="flex" justifyContent={"flex-start"}>
<Text fontSize={"24px"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
Pay in full or <span style={{color:"#6cca4e"}}>pay over time.</span>  Your choice.
</Text>
</Box>
</Box>


<Box bg="white" m="auto" w="312px" h="240px" display="flex" flexDirection={"column"} justifyContent="flex-start" alignItems="center" p="20px" border="4px solid white" borderRadius={"15px"} box-shadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' >
<Box w="100%" h="80px" display="flex" justifyContent={"flex-start"}>
< BsFillEmojiLaughingFill fontSize={"40px"}  color="#007aff"/>
</Box>
<Box w="100%" h="160px" display="flex" justifyContent={"flex-start"}>
<Text fontSize={"24px"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
Make them yours. <span style={{color:"#007aff"}}>Engrave a mix of emoji, names, and numbers for free.</span>
</Text>
</Box>
</Box>















  </Box>
  )
}

export default ShopWithUs