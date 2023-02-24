import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";
import {
  BsEmojiFrown,
  BsEmojiHeartEyes,
  BsEmojiExpressionless,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/Products/products.actions";
import { addToCartFn, removeCartItem } from "../../Redux/cart/cart.action";
export const ProdCard = ({ el }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        m="auto"
        bg="white"
        border={"1px"}
        borderColor="black"
        borderRadius={"15px"}
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        fontFamily={
          "SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
      >
        <Box h={"200px"}>
          <Img
            src={el.img}
            roundedTop={"sm"}
            // objectFit="cover"
            objectFit={"contain"}
            h="full"
            w="full"
            alt={"Blog Image"}
            m="auto"
            p="5%"
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              {el.category}
            </Text>
          </Box>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1} p="2px">
            {el.title}
          </Heading>
          <Text color={"gray.500"} noOfLines={1} p="2px">
            {el.description}
          </Text>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1} p="2px">
            ₹{el.price}
          </Heading>
        </Box>
        <HStack>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Button
              display="flex"
              justifyContent="center"
              gap="10px"
              bg="black"
              color="white"
              fontSize={"md"}
              fontWeight={"semibold"}
              onClick={() => {
                navigate(`/product/${el.id}`);
              }}
            >
              View more <BsArrowUpRight />
            </Button>
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor="pointer"
            onClick={() => {}}
          >
            {el.cartStatus ? (
              <BsHeartFill
                fill="red"
                fontSize={"24px"}
                onClick={() => {
                  let obj = { ...el, cartStatus: !el.cartStatus };
                  dispatch(updateProduct(obj));
                  dispatch(removeCartItem(obj.id));
                  toast({
                    title: (
                      <Text
                        display="flex"
                        justifyContent={"center"}
                        gap="5px"
                        alignItems={"center"}
                      >
                        Item removed from your Cart
                      </Text>
                    ),
                    status: "success",
                    isClosable: true,
                    position: "top",
                  });
                }}
              />
            ) : (
              <BsHeart
                fontSize={"24px"}
                onClick={() => {
                  let obj = { ...el, cartStatus: !el.cartStatus };
                  dispatch(updateProduct(obj));
                  obj.quantity = 1;
                  dispatch(addToCartFn(obj));
                  toast({
                    title: (
                      <Text
                        display="flex"
                        justifyContent={"center"}
                        gap="5px"
                        alignItems={"center"}
                      >
                        Item added to your Cart
                      </Text>
                    ),
                    status: "success",
                    isClosable: true,
                    position: "top",
                  });
                }}
              />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};

// import { useDispatch } from "react-redux";
// import { updateProduct } from "../../Redux/Products/products.actions";
// import { addToCartFn, removeCartItem } from "../../Redux/cart/cart.action";
// export const ProdCard2 = ({el}) => {
//   const toast = useToast();
//   const navigate=useNavigate();
// const dispatch=useDispatch();
//   return (
//     <Center py={6}>
//       <Box
//         w="300px"
//         h="400px"
//         borderBottom="1px solid black"
//         borderTop="1px solid black"
//         borderRadius={"15px"}
//         bg="white"
//         box-shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
//       >
//         <Box m="auto" w="216px" h="216px">
//           <Img
//             src={el.img}
//             roundedTop={"sm"}
//             // objectFit="cover"
//             objectFit={"contain"}
//             h="full"
//             w="full"
//             alt={"Blog Image"}
//             cursor="pointer"
//             onClick={()=>{
//               navigate(`/product/${el.id}`)
//           }}
//           />
//         </Box>
//         <Box w="100%" textAlign={"center"} color="#bf4800" fontSize={"16px"}>
//           <Text>{el.category}</Text>
//         </Box>
//         <Box textAlign={"center"}>
//           <Text fontSize={"21px"}  cursor="pointer" onClick={()=>{
//               navigate(`/product/${el.id}`)
//           }}>{el.title}</Text>
//         </Box>
//         <Box textAlign={"center"}>
//           <Text color="grey" lineHeight={"20px"}>
//             From <span style={{color:"#ff6600"}}>₹{el.price}</span>
//           </Text>
//         </Box>
//         <Box display="flex" justifyContent={"center"} gap="5px" w="100%">
//           <Box display="flex" justifyContent={"center"}>
//             {!el.cartStatus ? (
//               <Text
//                 color="green"
//                 display="flex"
//                 justifyContent={"center"}
//                 gap="5px"
//                 alignItems="center"

//               >
//                 Add me to your cart <BsEmojiFrown />
//               </Text>
//             ) : (
//               <Text
//                 display="flex"
//                 justifyContent={"center"}
//                 gap="5px"
//                 color="#cc4124"
//                 alignItems="center"
//               >
//                 I am Added <BsEmojiHeartEyes color="red" />
//               </Text>
//             )}
//           </Box>
//           <Box>
//             {el.cartStatus ? (
//               <BsHeartFill cursor={"pointer"} fill="red" fontSize={"24px"} onClick={()=>{
//              let obj={...el,cartStatus:!el.cartStatus}
//               dispatch(updateProduct(obj))
//              dispatch(removeCartItem(obj.id))
//              toast({
//               title: <Text display="flex" justifyContent={"center"} gap="5px" alignItems={"center"}>I am removed from your Cart<BsEmojiExpressionless color="white" /></Text>,
//               status: 'success',
//               isClosable: true,
//               position:'top'
//             })
//               }}/>
//             ) : (
//               <BsHeart cursor={"pointer"} fontSize={"24px"} onClick={()=>{
//                 let obj={...el,cartStatus:!el.cartStatus}
//                  dispatch(updateProduct(obj))
//                  obj.quantity=1;
//                  dispatch(addToCartFn(obj))
//                  toast({
//                   title: <Text display="flex" justifyContent={"center"} gap="5px" alignItems={"center"}>I am Added To your Cart<BsEmojiHeartEyes color="white" /></Text>,
//                   status: 'success',
//                   isClosable: true,
//                   position:'top'
//                 })
//                  }} />
//             )}
//           </Box>
//         </Box>
//         <Box
//           display="flex"
//           justifyContent={"center"}
//           gap="10px"
//           alignItems={"center"}
//         >
//           <Text color="#0066cc" fontSize={"14px"} display="flex" justifyContent={"center"} alignItems="center" gap="5px" onClick={()=>{
//               navigate(`/product/${el.id}`)
//           }} cursor="pointer">
//             See More Details <IoIosArrowForward/>
//           </Text>
//         </Box>
//       </Box>
//     </Center>
//   );
// };
