import {
    Box,
    Card,
    chakra,
    Divider,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import img1 from "../Images/img1.png";
  import img2 from "../Images/img2.png";
  import img3 from "../Images/img3.png";
  import img4 from "../Images/img4.png";

  
  function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function AdminDashboard1() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          fontWeight={'bold'}>
            <Text>Welcone to object'o'pedia Admin Dashboard</Text>
        </chakra.h1>
         <chakra.h2  textAlign={'center'}
          fontSize={'4xl'}
          fontWeight="light">Here is outcome of our services</chakra.h2>
          <br />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <Card bg={"#edf2f6"} > <img src={img2} alt='error' /> </Card>
            <Card bg={"#edf2f6"} > < img src={img1} alt='error' /></Card>
            <Card bg={"#edf2f6"} > <img src={img3} alt='error' /></Card> 
          </SimpleGrid>

          <br />
          <Divider/>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We serve'} stat={'50,000 people'} />
          <StatsCard title={'In'} stat={'30 different countries'} />
          <StatsCard title={'Who speak'} stat={'100 different languages'} />
        </SimpleGrid>
      </Box>
    );
  }