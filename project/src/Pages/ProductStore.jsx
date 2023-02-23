import React from "react";
import { Avatar, Box,  Text } from "@chakra-ui/react";

// import ProductsCarousel from "../Components/ProductCarousel/ProductsCarousel";

import { BsFillEmojiLaughingFill,BsApple } from "react-icons/bs";
import ShopWithUs from "../Components/shopWithUs";
import AllProducts from "../Components/AllProducts";
import ProductsCarousel from "../Components/ProductCarousel/ProductsCarousel";
const ProductStore = () => {
    const data=[
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635",
            name:"Mac"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1661027785546",
            name:"iPhone"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437",
            name:"iPad"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1661796454103",
            name:"Apple Watch"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
            name:"AirPods"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
            name:"AirTag"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
            name:"Apple TV 4K"
        },
        {
            image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
            name:"HomePod"
        },
       {
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660677092974",
        name:"Accessories"
       },
       {
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054",
        name:"Apple Gift Card"
       }


    ]
  return (
    <Box w="100%">
     <Box w="100%" p="20px">
     <Text
        fontFamily={
          "SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
        fontSize="14px"
        textAlign={"center"}
      >
        Get $200–$570 in credit toward an iPhone 14 when you trade in an iPhone
        11 or newer <sup>3</sup>{" "}
        <span style={{ color: "blue" }}>Shop Iphone</span>
      </Text>
     </Box>
      <Box
        w="100%"
        fontFamily={
          "SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
        bg="#f5f5f7"
        display="flex"
        flexWrap={"wrap"}
        color="#6e6e73"
        p="20px"
      >
        <Box
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "60%",
            xl: "60%",
            "2xl": "60%",
          }}
          pl={{
            base: "0",
            sm: "0",
            md: "0",
            lg: "100px",
            xl: "100px",
            "2xl": "100px",
          }}
          pt="60px"
          pb="60px"
          fontSize={{
            base: "20px",
            sm: "20px",
            md: "20px",
            lg: "48px",
            xl: "48px",
            "2xl": "48px",
          }}
          display="flex"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
            xl: "flex-end",
            "2xl": "flex-end",
          }}
          alignItems="right"
          
        >
          <Text
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <span style={{ color: "black" }}>Store.</span> The best way to buy
            the products you love.
          </Text>
        </Box>
        <Box
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "40%",
            xl: "40%",
            "2xl": "40%",
          }}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          gap="10px"
        >
          <Box
            w="100%"
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
              "2xl": "flex-start",
            }}
            alignItems="center"
          >
            <Avatar src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202211_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1671246216542" />
            <Text>
              Need shopping help? <br />
              <span style={{ color: "#2f6fd6" }}>Ask a Specialist</span>
            </Text>
          </Box>
          <Box
            w="100%"
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
              "2xl": "flex-start",
            }}
            alignItems="center"
          >
            <Avatar src="https://user-images.githubusercontent.com/112806398/220563190-ba788396-7d61-4641-8e6c-e08bf4afc66c.png" />
            <Text>
            Visit an Mac Match Store <br />
              <span style={{ color: "#2f6fd6" }}>Find one near you </span>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w="100%" bg="#f5f5f7" p="20px">
<ProductsCarousel data={data} bg="#212226"/>
      </Box>
      <Box w="100%" bg="#f5f5f7" p="20px" textAlign={"center"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
<Text fontSize={{base:"16px",sm:"16px",md:"18px",lg:"28px",xl:"28px","2xl":"28px"}} lineHeight="32px" fontWeight={"600"}><span style={{color:"#1d1d1f"}}>The Mac Match Store difference.</span> <span style={{color:"#6e6e73"}}>Even more reasons to shop with us.</span></Text>
     

      </Box>

 <ShopWithUs/>
<Box w="100%" bg="#f5f5f7">
<Box bg="white" w="312px" m="auto" h="240px" display="flex" flexDirection={"column"} justifyContent="flex-start" alignItems="center" p="20px" border="4px solid white" borderRadius={"15px"} box-shadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' >
<Box w="100%" h="80px" display="flex" justifyContent={"flex-start"}>
< BsApple fontSize={"40px"}  color="#f4795f"/>
</Box>
<Box w="100%" h="160px" display="flex" justifyContent={"flex-start"}>
<Text fontSize={"24px"} fontFamily={"SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"}>
<span style={{color:"#f4795f"}}>Customize</span> your Mac and create your own style of Apple Watch.
</Text>
</Box>
</Box>
</Box>
<AllProducts/>

    </Box>
  );
};

export default ProductStore;
