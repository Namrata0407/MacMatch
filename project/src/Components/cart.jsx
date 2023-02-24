import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../Redux/cart/cart.action";

const Cart = ({ id, title, category, img, price, description, quantity }) => {
  // const [quantity, setQuantity] = useState(1);
  const [qPrice, setQPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  // const handleQuantityChange = (value) => {
  //   setQuantity(value);
  // };

  const handleQuantityChange = (value, id) => {
    dispatch(updateCartItem(id, value));
  };

  const handleRemoveButton = async (id) => {
    dispatch(removeCartItem(id));
  };

  // useEffect(() => {
  //   setQPrice((quantity * price).toFixed(2));
  // }, [quantity]);

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

        <Box w={{ base: "100%", lg: "20%" }} py={8}>
          <Image
            p={2}
            height="140px"
            objectFit="contain"
            src={img}
            alt="Dan Abramov"
          />
        </Box>

        <Flex
          w={"80%"}
          mb={4}
          justify="space-between"
          //   border="1px solid red"
          p={4}
        >
          {" "}
          {/* image right */}
          <Grid textAlign="start" p={6}>
            {" "}
            {/* Ist box inside image right */}
            <Text fontSize={"2xl"}>{title}</Text>
            <Text>Pay 16% pa for 6 months</Text>
          </Grid>
          <Grid gap={10}>
            {" "}
            {/* IInd box inside image right */}
            <Flex justify="space-between" p={4}>
              <Flex>
                <Text fontSize="md" mr={4}>
                  Quantity:
                </Text>
                <select
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e.target.value, id)}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Flex>
              <Text>₹ {price * quantity}</Text>
            </Flex>
            <Box>
              <Text>Get up to 10% savings with eligible card(s)^</Text>
              <Text textAlign={"end"}>
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
