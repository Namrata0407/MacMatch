import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../Redux/cart/cart.action";

const Cart = ({
  id,
  title,
  category,
  img,
  price,
  description,
  quantity,
  handleTotalPrice,
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (value, id) => {
    dispatch(updateCartItem(id, value));
    handleTotalPrice();
  };

  // useEffect(() => {
  //   handleQuantityChange();
  // }, []);

  const handleRemoveButton = async (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <Box w="80%" m={"auto"}>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        mb={4}
        borderBottom="1px solid gray"
        p={4}
        gap={"20px"}
      >
        {/* Ist box */}

        <Box w={{ base: "100%", md: "20%", lg: "20%" }} py={8}>
          <Image
            p={2}
            height="140px"
            objectFit="contain"
            src={img}
            alt="Dan Abramov"
          />
        </Box>

        <Flex
          w={["100%", "80%", "80%"]}
          mb={4}
          justify="space-between"
          // border="1px solid red"
          direction={["column", "row", "row"]}
          p={4}
        >
          {" "}
          {/* image right */}
          <Grid textAlign="start" w={["100%", "50%"]} p={6}>
            {" "}
            {/* Ist box inside image right */}
            <Text
              textAlign={["center", "start", "start"]}
              fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
              fontWeight={[800, 600, 600]}
            >
              {title}
            </Text>
            <Text
              textAlign={["center", "start", "start"]}
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
            >
              Pay 16% pa for 6 months
            </Text>
          </Grid>
          <Grid w={["100%", "50%"]} gap={10}>
            {" "}
            {/* IInd box inside image right */}
            <Flex justify="space-between" p={4}>
              <Flex>
                <Text fontSize={{ base: "14px", md: "14px", lg: "md" }} mr={1}>
                  Quantity:
                </Text>
                <select
                  // value={quantity}
                  onChange={(e) => handleQuantityChange(e.target.value, id)}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Flex>
              <Text fontSize={{ base: "sm", md: "sm", lg: "md" }}>
                ₹ {price * quantity}
              </Text>
            </Flex>
            <Box>
              <Text
                textAlign={["center", "end", "end"]}
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
              >
                Get up to 10% savings with eligible card(s)^
              </Text>
              <Text
                textAlign={["center", "end", "end"]}
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
              >
                ₹{((price * quantity) / 6).toFixed(2)}/mo.^
              </Text>
            </Box>
            <Button
              size="sm"
              variant="outline"
              colorScheme="red"
              ml={4}
              onClick={() => handleRemoveButton(id)}
            >
              Remove
            </Button>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cart;
