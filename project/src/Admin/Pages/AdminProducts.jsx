import { Box, Button, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

// AiFillEye

import { FaRegEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";

const AdminProducts = () => {

    const [current, setCurrentPage] = useState(1);

    return (
        <>
           <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"} >
            <Heading>All Products</Heading>
             <AdminAddProductModal/>
           </Flex>
            <Box border={"5px solid black"} maxHeight={"500px"} overflow="scroll">
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <Thead bg={"black"} >
                            <Tr>
                                <Th color="white">Product Id</Th>
                                <Th color="white">Product name</Th>
                                <Th color="white">category</Th>
                                <Th color="white">price</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                            <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                        </Tbody>
                      </Table>
                </TableContainer>
            </Box>
            <Flex  bg={"black"} color={"white"} justifyContent={"flex-end"}  >            
                        <Button isDisabled={current === 1}  _hover={{backgroundColor:"grey"}} bg={"black"} color={"white"}  cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"black"} color={"white"}>{". ."}{current}{". ."}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button>
            </Flex>
        </>
    )
}

export default AdminProducts