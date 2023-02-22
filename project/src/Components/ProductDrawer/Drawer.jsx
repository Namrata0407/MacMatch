import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack,
    Heading,
    RadioGroup,
    Radio,
    Text,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handlePage } from '../../Redux/Products/products.actions';
export default function FilterSortDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialFilterValues = searchParams.getAll('filter');
    const initialSortValues=searchParams.getAll("sort");
    const[sortValues,setSortValues]=useState(initialSortValues);
    const pageNo=useSelector((store)=>store.ProductReducer.page);
    const [filterValues, setFilterValues]=useState(initialFilterValues);
        const btnRef = React.useRef()
        const handleFilterChange  = (value) => {
            setFilterValues(value)
            dispatch(handlePage(1))
        }



        const handleSortChange=(val)=>{
            setSortValues(val);
            dispatch(handlePage(1))
            console.log(val)
        }
        useEffect(() => {
            let params = {}
            if(filterValues.length) params.filter = filterValues;
        
            if(sortValues.length) params._sort='price';
            if(sortValues.length) params._order=sortValues;
            setSearchParams(params)
        }, [filterValues,sortValues])
    return (
      <>
        <Button ref={btnRef} bg="black" color="white" _hover={{bg:"black"}} onClick={onOpen}  display="block" m="auto" mt="20px">
        Press To Filter & Sort Your Products
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
  
            <DrawerBody>
            <CheckboxGroup colorScheme='green' value={filterValues} onChange={handleFilterChange}>

            <Heading>Filter </Heading>
  <Stack spacing={[1, 5]} direction={['column', 'column']}>
    <Text fontWeight={"bold"}>By Category</Text>
    <Checkbox value='MacBook Air'>MacBook Air</Checkbox>
    <Checkbox value='MacBook Pro'>MacBook Pro</Checkbox>
    <Checkbox value='iPad'>iPad</Checkbox>
    <Checkbox value="iPhone">iPhone</Checkbox>
    <Checkbox value="Watch">Watch</Checkbox>
    <Checkbox value="Airpods">Airpods</Checkbox>
    <Checkbox value="Tv & Home">Tv & Home</Checkbox>
    <Checkbox value="Entertainment">Entertainment</Checkbox>
    <Checkbox value="Accessorires">Accessorires</Checkbox>
  </Stack>
</CheckboxGroup>


<Heading mt="20px">Sort </Heading >
    <RadioGroup onChange={handleSortChange} value={sortValues}>
   
    <Text fontWeight={"bold"}> By Price</Text>
      <Stack direction='column'>
        <Radio value='asc'>Low To High</Radio>
        <Radio value='desc'>High To Low</Radio>
      </Stack>
    </RadioGroup>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }