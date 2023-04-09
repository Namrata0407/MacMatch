import React from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { SingleProductPageApi } from '../Redux/Products/products.api';
import { useDispatch } from "react-redux";
import { updateProduct } from '../Redux/Products/products.actions';
import { addToCartFn } from '../Redux/cart/cart.action';

 const SingleProductPage=()=>{
  const dispatch=useDispatch()
  const {id}=useParams();
  const [data,setData]=useState({});
  const toast = useToast();
  const[qty,setQty]=useState(1);
  const GetData=()=>{

    SingleProductPageApi(id).then((res)=>{
      setData(res)
     setQty(res.quantity)
    }).catch((er)=>{console.log(er)})

  
  }
  let auth=localStorage.getItem('name');

  console.log(id);

  useEffect(()=>{
    GetData()
        },[id])
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex  p="10px">
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
            data.img
            }
         
            // fit={'cover'}
             align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '300px' }}
          //   justifyContent={"center"} 
          //   alignItems="center"
          //   h="100px"
          //   w="auto"
          //  m="auto"
        
            objectFit={"contain"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ₹{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              
              <Text fontSize={'lg'}>
               {
                data.description
               }
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Category:
                  </Text>{' '}
                {data.category}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Rating:
                  </Text>{' '}
                 {data.rating<3?<span>★★</span>:<span>★★★★✩</span>}
                 ({data.rating})
                </ListItem>
              
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Quantity:
                  </Text>{' '}
              {data.quantity}
                </ListItem>
              </List>
            </Box>
          </Stack>

         { <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            
            
            onClick={() => {
              if(auth){
                let obj = { ...data, cartStatus: !data.cartStatus };
                dispatch(updateProduct(obj));
                obj.quantity = 1;
                dispatch(addToCartFn(obj));
                toast({
                  title: (
                    <Text
                      display="flex"
                      justifyContent={"center"}
                      gap="5px"
                      alignItems={"center"}
                    >
                      Item added to your Cart
                    </Text>
                  ),
                  status: "success",
                  isClosable: true,
                  position: "top",
                });
              }
            else{
              toast({
                title: (
                  <Text
                    display="flex"
                    justifyContent={"center"}
                    gap="5px"
                    alignItems={"center"}
                  >
                    Please do Login to add item
                  </Text>
                ),
                status: "success",
                isClosable: true,
                position: "top",
              });

            }
          
          
          
          
    
          }
        } 
            >
            Add to cart
          </Button>
 }
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}


export default SingleProductPage
