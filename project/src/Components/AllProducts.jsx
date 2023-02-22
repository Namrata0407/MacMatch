import React, { useEffect } from "react";
import { Box, Button, filter, Heading, Text } from "@chakra-ui/react";
import FilterSortDrawer from "../Components/ProductDrawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getLimitedProduct, getProduct, getTotalProduct, handlePage } from "../Redux/Products/products.actions";
import { ProdCard } from "./ProductCard/ProdCard";
import { INCREASE_PAGE } from "../Redux/Products/products.actions.types";
const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.totalProducts);
  const limitedProds=useSelector((store)=>store.ProductReducer.products);
//   console.log(limitedProds,"hi")
const load=useSelector((store)=>store.ProductReducer.loading);
const pageNo=useSelector((store)=>store.ProductReducer.page);


// console.log(pageNo)
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (products == [] || location) {
      const getProductsParam = {
        params: {
          category: searchParams.getAll("filter"),
          _sort: "price",
          _order: searchParams.getAll("_order"),
        },
      };
      dispatch(getTotalProduct());
      dispatch(getLimitedProduct(getProductsParam,pageNo,6));
    }
  }, [location.search,pageNo]);

 
const ChangePage=(val)=>{
dispatch(handlePage(val))

const getProductsParam = {
    params: {
      category: searchParams.getAll("filter"),
      _sort: "price",
      _order: searchParams.getAll("_order"),
    },
  };
dispatch(getLimitedProduct(getProductsParam,val,6));
}

let limit;
if(products){
    limit=Math.ceil(products.length/6)
}
const getProductsParam = {
    params: {
      category: searchParams.getAll("filter"),
      _sort: "price",
      _order: searchParams.getAll("_order"),
    },
  };
   
if((getProductsParam.filter || getProductsParam._sort) && limitedProds){
    limit=Math.ceil(limitedProds.length/6)
}


  return (
    <Box
      w="100%"
      bg="#f5f5f7"
      p="40px"
      fontFamily={
        "SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
      }
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
      >
      

        {limitedProds?limitedProds.map((el) => (
          <ProdCard key={el.id} {...el} />
        )):<Heading>Loading....</Heading>}
      </Box>
      <Box display="flex" justifyContent={"center"} alignItems="center" gap="5px">
      <Button bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(pageNo!==1)
      {
        ChangePage(pageNo-1)
      }}}>{"<"}</Button>{
         products?Array(limit).fill("").map((el,index)=>(<Button border="1px solid black" key={index} colorScheme={pageNo===index+1?"cyan":"gray"} onClick={()=>{
             if(pageNo!==index+1)
             {
                ChangePage(index+1)
             }
         }}>{index+1}</Button>)):""
      }     <Button bg="black" color="white" _hover={{bg:"black"}}  onClick={()=>{  if(pageNo!==limit)
        {
          ChangePage(pageNo+1)
        }}}>{">"}</Button>
      </Box>
    </Box>
  );
};

export default AllProducts;
