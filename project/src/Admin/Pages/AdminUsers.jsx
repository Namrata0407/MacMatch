import { Box, Button, Divider, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

// AiFillEye

// import { FaRegEye } from "react-icons/fa";
// import { GrEdit } from "react-icons/gr";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import {SlHandbag} from "react-icons/sl"
// import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";

const AdminUsers = () => {

    const [current, setCurrentPage] = useState(1);

    return (
        <>
           <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"} >
            <Heading fontSize={"45px"}>Users</Heading>
           
             {/* <AdminAddProductModal/> */}
           </Flex>
            <Box border={"5px solid #023e8a"} maxHeight={"500px"} overflow="scroll">
                <TableContainer>
                <Heading textAlign={"start"} fontSize={"40px"} color={"grey"}>User Database</Heading>
                    
                    <Table variant='striped'  backgroundColor={"#caf0f8"}>
                       
                        <Thead bg={"#023e8a"} >
                        <Tr>

                                
                            </Tr>
                            <Tr>
                                <Th color="white">User Id</Th>
                                <Th color="white">User image</Th>
                                <Th color="white">User name</Th>
                                <Th color="white">Email</Th>
                                <Th color="white">Gender</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                            <Td>inches</Td>
                            <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>

                            
                        </Tbody>
                      </Table>
                </TableContainer>
            </Box>
            <Flex  bg={"#023e8a"} color={"white"} justifyContent={"flex-end"}  >            
                        <Button isDisabled={current === 1}  _hover={{backgroundColor:"grey"}} bg={"#023e8a"} color={"white"}  cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"}>{". ."}{current}{". ."}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"#023e8a"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button>
            </Flex>
        </>
    )
}

export default AdminUsers