import React, { useEffect } from "react";
import { Box, Button, filter, Heading, Text } from "@chakra-ui/react";
import FilterSortDrawer from "../Components/ProductDrawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getLimitedProduct, getProduct, getTotalProduct, handlePage } from "../Redux/Products/products.actions";
import  {ProdCard } from "./ProductCard/ProdCard";
import { INCREASE_PAGE } from "../Redux/Products/products.actions.types";
import { Spinner } from '@chakra-ui/react'

const AllProducts = () => {
  const dispatch = useDispatch();
  
  const limitedProds=useSelector((store)=>store.ProductReducer.products);
//   console.log(limitedProds,"hi")
// const load=useSelector((store)=>store.ProductReducer.loading);
//  const page=useSelector((store)=>store.ProductReducer.page);
// const page2=useSelector((store)=>store.ProductReducer);
// console.log(page2)
const {loading,page,productCount,products}=useSelector((store)=>store.ProductReducer)
// console.log(page)
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (limitedProds == [] || location) {
      const getProductsParam = {
        params: {
          category: searchParams.getAll("filter"),
          _sort: "price",
          _order: searchParams.getAll("_order")[0],
        },
      };
      console.log(getProductsParam)
      dispatch(getLimitedProduct(getProductsParam,page,6));
    }
  }, [location.search]);

 
const ChangePage=(val)=>{
dispatch(handlePage(val))

const getProductsParam = {
    params: {
      category: searchParams.getAll("filter"),
      _sort: "price",
      _order: searchParams.getAll("_order")[0],
    },
  };
dispatch(getLimitedProduct(getProductsParam,val,6));
}

let limit;
if(products){
    limit=Math.ceil(productCount/6)
}




  return (
    <Box
      w="100%"
      bg="#f5f5f7"
      p="40px"
      fontFamily={
        "SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
      }
      position="relative"
    >
      <Text fontSize={"24px"} textAlign="center">
        <span style={{ color: "#1d1d1f" }}>
          Whenever and however you need it.
        </span>
        <span style={{ color: "#6e6e73" }}>
          Take a look at what we have for you.
        </span>
      </Text>
      <FilterSortDrawer />
      <Box
        w="100%"
        display="flex"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent={"space-evenly"}
        mt="25px"
       gap="4px"
      
      >
      

        {limitedProds?limitedProds.map((el) => (
          <ProdCard key={el.id} el={el} />
        )):<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />}
      </Box>
      <Box display={{base:"flex",sm:"flex",md:"none",lg:"none",xl:"none","2xl":"none"}} justifyContent={"center"} alignItems="center" gap="5px">
        <Button  bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(page!==1)
      {
        ChangePage(page-1)
      }}}>{"<"}</Button><Button border="1px solid black" colorScheme={"cyan"} >{page}</Button> <Button bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(page!==limit)
        {
          ChangePage(page+1)
        }}}>{">"}</Button>
      </Box>


      <Box display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}} justifyContent={"center"} alignItems="center" gap="5px">
      <Button bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(page!==1)
      {
        ChangePage(page-1)
      }}}>{"<"}</Button>{
         products?Array(limit).fill("").map((el,index)=>(<Button border="1px solid gray" _hover={"none"} key={index} bg={page===index+1?"gray":"white"} color={page===index+1?"white":"black"} onClick={()=>{
             if(page!==index+1)
             {
                ChangePage(index+1)
             }
         }}>{index+1}</Button>)):""
      }     <Button bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(page!==limit)
        {
          ChangePage(page+1)
        }}}>{">"}</Button>
      </Box>
    </Box>
  );
};

export default AllProducts;
