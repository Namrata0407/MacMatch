import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Components/cart";
import EmptyCart from "../Components/EmptyCart";
import { getCartProduct } from "../Redux/cart/cart.action";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartReducer.cart);

  // const handleTotalPrice = (priceValue) => {
  //   setSubTotal(priceValue);
  // };

  useEffect(() => {
    dispatch(getCartProduct());
  }, []);

  useEffect(() => {
    let subTot = data.reduce((acc, item) => acc + item.price, 1);
    setSubTotal(subTot);
    localStorage.setItem("totalPrice", subTot);
  }, [data]);

  return (
    <>
      {data?.length > 0 ? (
        data?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })
      ) : (
        <EmptyCart />
      )}

      {data?.length > 0 && (
        <Box boxShadow="lg" p={4} mt={4} w={"50%"} margin="auto">
          <Flex justifyContent="space-between" mb={4}>
            <Text fontSize="2xl">Subtotal:</Text>
            <Text fontSize="2xl">₹ {subTotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent="space-between" mb={4}>
            <Text fontSize="lg">Shipping</Text>
            <Text fontSize="lg">FREE</Text>
          </Flex>
          <Flex justifyContent="space-between" mb={4}>
            <Text fontSize="lg">Monthly Payment:</Text>
            <Text fontSize="lg">₹ {(subTotal / 6).toFixed(2)}</Text>
          </Flex>
          <Link to={"/checkout"}>
            <Button size="lg" colorScheme="blue">
              Check Out
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default CartPage;
