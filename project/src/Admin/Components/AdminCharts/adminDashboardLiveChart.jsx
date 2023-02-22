

import React from "react";
import { Chart } from "react-google-charts";
import { Divider, Box, Heading, useColorModeValue } from "@chakra-ui/react";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2020", 1000, 400],
  ["2021", 1170, 460],
  ["2022", 660, 1120],
  ["2023", 1030, 540],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
};
const LineSales = ({ title }) => {
  return (
    <>
      <Box
        mt={"6"}
        borderRadius="md"
        shadow="md"
        bg={useColorModeValue("white.300", "white.700")}
        color={useColorModeValue("gray.300", "gray.700")}
        border="1px solid #999"
      >
        <Heading p="6">{title}</Heading>
        <Divider />
        <Box py="4" color={"white"}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </Box>
      </Box>
    </>
  );
};

export default LineSales;