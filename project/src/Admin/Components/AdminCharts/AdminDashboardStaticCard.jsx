
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUserPlus } from "react-icons/fi";
const StatisticsCard = ({ title, logo, statistic }) => {
  return (
    <>
      <Flex
        border="1px solid #999"
        shadow="lg"
        p="6"
        borderRadius="md"
        gap={"50px"}
        alignItems={"center"}
        bg={useColorModeValue("white.700", "gray.700")}
        transition={"ease-in-out"}
        transitionDuration={"0.2s"}
        _hover={{ transform: "scale(1.02)" }}
        cursor="pointer"
      >
        <VStack align={"left"}>
          <Text fontSize={"40"}>{statistic}</Text>
          <Text fontSize={"18"}>{title}</Text>
        </VStack>
        <Spacer />
        <VStack>
          <Flex
            alignItems="center"
            justifyContent="center"
            w="10"
            h="10"
            fontSize="2xl"
            borderRadius="md"
            color={"#fff"}
            bg={"orange.400"}
          >
            {logo}
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default StatisticsCard;