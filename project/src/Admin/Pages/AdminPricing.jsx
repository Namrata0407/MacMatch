import {
    Box,
    Button,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  
  import { SlHandbag } from "react-icons/sl";
  import { useDispatch, useSelector } from "react-redux";
  import {
    getAdminDataProduct,
    ordersAdminData,
  } from "../../Redux/AdminRedux/admin.action";
  // import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
  import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
  import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
  import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";
  
  const AdminPricing = () => {
    const [current, setCurrentPage] = useState(1);
    const data = useSelector((res) => res.adminReducer.orders);
    const dispatch = useDispatch();
  
    console.log(data);
    useEffect(() => {
      dispatch(ordersAdminData);
    }, []);
  
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
      totalPrice += data[i].price;
    }
    // console.log(totalPrice)
    return (
      <>
        <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"}>
          <Heading textAlign={"start"}>Product Price</Heading>
          {/* <AdminAddProductModal/> */}
        </Flex>
        <Box
          border={"5px solid #023e8a"}
          maxHeight={"500px"}
          overflow="scroll"
          display={"flex"}
          width={"59%"}
        >
          <TableContainer>
            <Heading textAlign={"start"} fontSize={"40px"} color={"grey"}>
              Price Detail
            </Heading>
            <Table variant="striped" backgroundColor={"#caf0f8"}>
              <Thead bg={"#023e8a"}>
                <Tr>
                  <Th color="white">Product Id</Th>
                  <Th color="white">Product name</Th>
                  <Th color="white">Product price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((el) => (
                  <Tr key={el.id}>
                    <Td>{el.id}</Td>
                    <Td>{el.title}</Td>
                    <Td>
                      {"₹ "}
                      {el.price}
                    </Td>
                    {/* <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Flex
          bg={"#023e8a"}
          color={"white"}
          width={"59%"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Text padding={"10px"}>
            Total Price Summary :- {"₹ "}
            {totalPrice}
          </Text>
          {/* <Button isDisabled={current === 1}  _hover={{backgroundColor:"grey"}} bg={"#023e8a"} color={"white"}  cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button> */}
          {/* <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"}>{". ."}{current}{". ."}</Button> */}
          {/* <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button> */}
        </Flex>
      </>
    );
  };
  
  export default AdminPricing;
  