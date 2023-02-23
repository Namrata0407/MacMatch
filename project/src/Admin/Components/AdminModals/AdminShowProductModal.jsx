
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react'
import { FaRegEye } from "react-icons/fa";


export const AdminShowProductModal = ({el}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Image src={el.img} alt = "errro" h={"50px"} cursor={"pointer"} onClick={onOpen}/>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Product Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Box margin={"auto"} >
                <Image src={el.img} alt='error'/>
              </Box>
              {/* <Box border={"2px solid red"}>
                  <Text>Title: ProductTitle</Text>
                  <Text>Category: Category</Text>
                  <Text>Price: Price</Text>
              </Box> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}