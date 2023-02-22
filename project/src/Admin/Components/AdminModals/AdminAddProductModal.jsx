
import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"




export const AdminAddProductModal = () => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Button
                fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                Add New Product
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader >Add a new product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                        <Box>
                            <Text>Name of Product</Text>
                            <Input placeholder="New Product Name" />
                            <Text>Image Url</Text>
                            <Input placeholder="Image Url" />
                            <Text>Product Description</Text>
                            <Input placeholder="Product Description" />
                            <Text>Category</Text>
                            <Input placeholder="Category" />
                            <Text>Price</Text>
                            <Input type={"number"} placeholder="price" />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Flex justifyContent={"space-between"} gap={"8px"}>
                            <Button bg={"red"} color="white" onClick={onClose}>Cance</Button>
                            <Button bg={"#0072ba"} color="white" onClick={onClose}>Save</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}