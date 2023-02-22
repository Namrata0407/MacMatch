
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


export const AdminShowProductModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
  
    return (
      <>
        <FaRegEye color="blue" cursor={"pointer"} onClick={onOpen}/>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={"center"}>Product Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Box border={"2px solid black"} >
                  <Image src='https://png.pngitem.com/pimgs/s/111-1117169_clipart-of-chota-bheem-hd-png-download.png' alt='error'/>
                </Box>
                <Box border={"2px solid red"}>
                    <Text>Title: ProductTitle</Text>
                    <Text>Category: Category</Text>
                    <Text>Price: Price</Text>
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }