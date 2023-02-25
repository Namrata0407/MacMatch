import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
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


  const loader = useSelector((store) => store.cartReducer.isLoading);

  const handleTotalPrice = () => {
    let subTot = data?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      1
    );
    setSubTotal(subTot);
    localStorage.setItem("totalPrice", subTot);
  };

  useEffect(() => {
    dispatch(getCartProduct());
  }, []);

  useEffect(() => {
    handleTotalPrice();
  }, [data]);

  if (loader) {
    <h1 fontSize="6xl">Loading...</h1>;
  }

  return (
    <>
      {data?.length > 0 ? (
        data?.map((item) => {
          return (
            <Cart key={item.id} {...item} handleTotalPrice={handleTotalPrice} />
          );
        })
      ) : (
        <EmptyCart />
      )}

      {data?.length > 0 && (
        <Box
          boxShadow="lg"
          p={4}
          // mt={4}
          w={{ base: "80%", md: "50%", lg: "50%" }}
          margin="auto"
          // border={'1px solid red'}
        >
          <Flex justifyContent="space-between" mb={4}>
            <Text fontSize={{ base: "lg", lg: "2xl" }}>Subtotal:</Text>
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
            <Flex justify={"center"}>
              <Button size="lg" colorScheme="blue">
                Check Out
              </Button>
            </Flex>
          </Link>
        </Box>
      )}
    </>
  );
};

export default CartPage;
