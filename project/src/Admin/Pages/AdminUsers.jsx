import { Box, Button, Divider, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import {SlHandbag} from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdminData } from "../../Redux/AdminRedux/admin.action";
// import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminDeleteUserModal } from "../Components/AdminModals/AdminDeleteUserModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";

const AdminUsers = () => {
const dispatch = useDispatch();
    const [current, setCurrentPage] = useState(1);
    const data = useSelector((res) => res.adminReducer.users);
// console.log(data)

useEffect(()=>{
dispatch(getUsersAdminData)
},[]);

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
                                <Th color="white">user Email</Th>
                                <Th color="white">Mobile No</Th>
                                <Th color="white">Gender</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

             {data?.map((el)=>(
    
    <Tr key={el.id}>
    <Td>{el.id}</Td>
    <Td><Image width={"100px"} height={"100px"} borderRadius={"50%"} src={el.profile} alt={"avatar"}/></Td>
    <Td>{el.name}</Td>
    <Td>{el.email}</Td>
    <Td>{el.mobile}</Td>
    <Td>{el.gender}</Td>
     <Td> <Flex gap={"10px"} > <AdminDeleteUserModal id= {el.id}/> </Flex> </Td> 
</Tr>
             ))}           
                            

                            
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