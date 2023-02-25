import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postAdminDataProduct } from "../../../Redux/AdminRedux/admin.action";

export const AdminAddProductModal = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const toast = useToast();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const handlePostData = () => {
    const obj = {
      
      title,
      category,
      img:image,
      price: +price,
      rating:4.8,
      cartStatus:false,
      description
    };

    dispatch(postAdminDataProduct(obj)).then(()=> toast({
        title: `Product Added Successfully`,
        position: "top",
        isClosable: true,
        status: "success",
        // description:"Successfully added in your list",
        duration: 9000,
      }))
   
    onClose();

    setTitle("");
    setImage("");
    setCategory("");
    setDiscription("");
    setPrice("")
  };
  return (
    <>
      <Button
        fontWeight={"extrabold"}
        bg={"#023e8a"}
        border={"1px solid black"}
        color={"white"}
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Add New Product
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add a new product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Name of Product</Text>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New Product Name"
              />
              <Text>Image Url</Text>
              <Input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image Url"
              />
              <Text>Product Description</Text>
              <Input
                value={description}
                onChange={(e) => setDiscription(e.target.value)}
                placeholder="Product Description"
              />
              <Text>Category</Text>
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
              <Text>Price</Text>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type={"number"}
                placeholder="price"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent={"space-between"} gap={"8px"}>
              <Button bg={"red"} color="white" onClick={onClose}>
                Cance
              </Button>
              <Button bg={"#0072ba"} color="white" onClick={handlePostData}>
                Save
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
