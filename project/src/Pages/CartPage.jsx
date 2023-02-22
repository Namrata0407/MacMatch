import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../Components/cart";

const CartPage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get(`http://localhost:8080/cart`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      {data.map((item) => {
        return <Cart {...item} />;
      })}

      <Box boxShadow="lg" p={4} mt={4} w={"50%"} margin="auto">
        <Flex justifyContent="space-between" mb={4}>
          <Text fontSize="2xl">Subtotal:</Text>
          <Text fontSize="2xl">₹ 1234455</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={4}>
          <Text fontSize="lg">Shipping</Text>
          <Text fontSize="lg">FREE</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={4}>
          <Text fontSize="lg">Monthly Payment:</Text>
          <Text fontSize="lg">₹ 1234455</Text>
        </Flex>
        <Button size="lg" colorScheme="blue">
          Check Out
        </Button>
      </Box>
    </Card>
  );
};

export default CartPage;
