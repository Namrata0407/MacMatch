import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  // Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import styles from "./Footer.module.css";
import logo from "../Kausik_Assets/MAC_MATCH.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.mainFooterDiv}>
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container as={Stack} maxW={"6xl"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
              <Stack align={"flex-start"}>
                <ListHeader>Shop and Learn</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Store
                </Link>
                <Link className={styles.link} href={"#"}>
                  Mac
                </Link>
                <Link className={styles.link} href={"#"}>
                  iPad
                </Link>
                <Link className={styles.link} href={"#"}>
                  iPhone
                </Link>
                <Link className={styles.link} href={"#"}>
                  Watch
                </Link>
                <Link className={styles.link} href={"#"}>
                  AirPods
                </Link>
                <Link className={styles.link} href={"#"}>
                  TV & Home
                </Link>
                <Link className={styles.link} href={"#"}>
                  AirTag
                </Link>
                <Link className={styles.link} href={"#"}>
                  Accessories
                </Link>
                <Link className={styles.link} href={"#"}>
                  Gift Cards
                </Link>

                <ListHeader>Apple Wallet</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Wallet
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Account</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Manage Your Apple ID
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Store Account
                </Link>
                <Link className={styles.link} href={"#"}>
                  iCloud.com
                </Link>

                <ListHeader>Entertainment</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Apple One
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple TV+
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Music
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Arcade
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Podcasts
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Books
                </Link>
                <Link className={styles.link} href={"#"}>
                  App Store
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Apple Store</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Way to Buy
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Trade In
                </Link>
                <Link className={styles.link} href={"#"}>
                  Recycling Programme
                </Link>
                <Link className={styles.link} href={"#"}>
                  Order Status
                </Link>
                <Link className={styles.link} href={"#"}>
                  Shopping Help
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>For Business</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Apple and Business
                </Link>

                <ListHeader>For Education</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Apple and Education
                </Link>
                <Link className={styles.link} href={"#"}>
                  Shop for Education
                </Link>
                <Link className={styles.link} href={"#"}>
                  Shop for University
                </Link>

                <ListHeader>For Healthcare</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Apple in Healthcare
                </Link>
                <Link className={styles.link} href={"#"}>
                  Health on Apple Watch
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Apple Values</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Accessibility
                </Link>
                <Link className={styles.link} href={"#"}>
                  Education
                </Link>
                <Link className={styles.link} href={"#"}>
                  Environment
                </Link>
                <Link className={styles.link} href={"#"}>
                  Privacy
                </Link>
                <Link className={styles.link} href={"#"}>
                  Supplier Responsibility
                </Link>

                <ListHeader>About Apple</ListHeader>
                <Link className={styles.link} href={"#"}>
                  Newsroom
                </Link>
                <Link className={styles.link} href={"#"}>
                  Apple Leadership
                </Link>
                <Link className={styles.link} href={"#"}>
                  Career Opportunities
                </Link>
                <Link className={styles.link} href={"#"}>
                  Investors
                </Link>
                <Link className={styles.link} href={"#"}>
                  Ethics & Compliance
                </Link>
                <Link className={styles.link} href={"#"}>
                  Events
                </Link>
                <Link className={styles.link} href={"#"}>
                  Contact Apple
                </Link>
              </Stack>
            </SimpleGrid>
          </Container>
          <Box py={10}>
            <Text pt={6} fontSize={"sm"}>
              More ways to shop: Find a retailer near you. Or call 000800 040
              1966.
            </Text>
            <Flex
              align={"center"}
              _before={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.700"),
                flexGrow: 1,
                mr: 8,
              }}
              _after={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.700"),
                flexGrow: 1,
                ml: 8,
              }}
            >
              <img src={logo} width={"16px"} alt="logo" />
            </Flex>
            <Text pt={6} fontSize={"sm"}>
              Copyright © 2023 Apple Inc. All rights reserved. Privacy Policy |
              Terms of Use | Sales | Policy | Legal | Site Map
            </Text>
          </Box>
        </Box>{" "}
      </div>
    </div>
  );
}
