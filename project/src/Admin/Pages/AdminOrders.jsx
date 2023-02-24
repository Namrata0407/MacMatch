import { Box, Button, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";

// AiFillEye

// import { FaRegEye } from "react-icons/fa";
// import { GrEdit } from "react-icons/gr";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import {SlHandbag} from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux";
import { ordersAdminData } from "../../Redux/AdminRedux/admin.action";
// import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";

const AdminOrders = () => {

    const [current, setCurrentPage] = useState(1);
    const data = useSelector((res) => res.adminReducer.orders);
    console.log(data)
const dispatch = useDispatch();


    useEffect(()=>{
  dispatch(ordersAdminData)
    },[]);
    return (
        <>
           <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"} >
            <Heading>Orders</Heading>
           
             {/* <AdminAddProductModal/> */}
           </Flex>
            <Box border={"5px solid #023e8a"} maxHeight={"500px"} overflow="scroll">
                <TableContainer>
                <Heading textAlign={"start"} fontSize={"40px"} color={"grey"}>Order Database</Heading>
                    <Table variant='striped'  backgroundColor={"#caf0f8"}>
                        <Thead bg={"#023e8a"} >
                            <Tr>
                                <Th color="white">Product Id</Th>
                                <Th color="white">Product image</Th>
                                <Th color="white">Product name</Th>
                                <Th color="white">category</Th>
                                <Th color="white">price</Th>
                                <Th color="white">Status</Th>
                                {/* <Th color="white">Action</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>

                {data?.map((el)=>(
   <Tr key={el.id}>
   <Td>{el.id}</Td>
   <Td><Image borderRadius={"20px"} width={"90px"} height={"100px"} src={el.img} alt={"orderimage"}/></Td>
   <Td>{el.title}</Td>
   <Td>{el.category}</Td>
   <Td>{"₹ "}{el.price}</Td>
   <Td>Pending</Td>
   {/* <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td> */}
</Tr>
                ))}            
                         
                           

                            
                        </Tbody>
                      </Table>
                </TableContainer>
            </Box>
            <Flex  bg={"#023e8a"} color={"white"} justifyContent={"flex-end"} height={"25px"} >            
                        {/* <Button isDisabled={current === 1}  _hover={{backgroundColor:"grey"}} bg={"#023e8a"} color={"white"}  cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button> */}
                        {/* <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"}>{". ."}{current}{". ."}</Button> */}
                        {/* <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button> */}
            </Flex>
        </>
    )
}

export default AdminOrders