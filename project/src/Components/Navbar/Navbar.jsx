import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  // Heading,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../Kausik_Assets/MAC_MATCH.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaSearchPlus } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

let authentication = localStorage.getItem("name");

const NAV_ITEMS = [
  {
    label: "Store",
    href: "/store",
    children: [
      {
        label: "MacBook Air",
        subLabel: "Explore our wide range of collection",
        href: "/signup",
      },
      {
        label: "MacBook Pro",
        subLabel: "Upgraded version of MAC Book",
        href: "#",
      },
      {
        label: "iPhone",
        subLabel: "It does before think",
        href: "#",
      },
      {
        label: "iPad",
        subLabel: "World's fastest tablet",
        href: "#",
      },
      {
        label: "Watch",
        subLabel: "Make your life healthy",
        href: "#",
      },
      {
        label: "Air Pods",
        subLabel: "Hear music with heart",
        href: "#",
      },
      {
        label: "TV & Home",
        subLabel: "Upgrade your home to the next level",
        href: "#",
      },
      {
        label: "Entertainment",
        subLabel: "Just entertain between work",
        href: "#",
      },
      {
        label: "Accessories",
        subLabel: "Go to next Era of life",
        href: "#",
      },
    ],
  },
  {
    label: "Mac",
    href: "/",
  },
  {
    label: "iPad",
    href: "/",
  },
  {
    label: "iPhone",
    href: "#",
  },
  {
    label: "Watch",
    href: "#",
  },
  {
    label: "AirPods",
    href: "#",
  },
  {
    label: "TV&Home",
    href: "#",
  },
  {
    label: "Entertainment",
    href: "#",
  },
  {
    label: "Accessories",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { logoutUser } = useContext(AuthContext);

  return (
    <Box position={"sticky"} top={"0px"} zIndex={"1000"}>
      <Flex
        bg={"rgba(24, 24, 24, 0.948)"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            // variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className={styles.logo}
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {authentication ? (
            <>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/cart"}
                color={"white"}

              >
                <BsFillBagCheckFill />
                <span style={{ marginLeft: "4px" }}>Cart : 0</span>
              </Button>
              <Button className={styles.name}>{localStorage.getItem("name")}❤️</Button>
              <Button className={styles.name} href={"/signin"} onClick={logoutUser}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/signin"}
                color={"white"}
              >
                Sign In
              </Button>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"gray.600"}
                href={"/signup"}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
          {/*  */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [query, setQuery] = useState("");
  const [suggation, setSuggation] = useState([]);

  const products = [
    {
      id: 1,
      title: "Apple 2020 Macbook Air laptop M1 chip",
      category: "MacBook Air",
      img: "https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m2__ejbs627dj7ee_large.jpg",
      price: 99900,
      rating: 3.9,
      cartStatus: false,
      description:
        "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    },
    {
      id: 2,
      title: "Apple 2020 Macbook Air laptop M2 chip",
      category: "MacBook Air",
      img: "https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_large.jpg",
      price: 11799,
      rating: 4.9,
      cartStatus: false,
      description:
        "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    },
    {
      id: 3,
      title: "Apple 2020 Macbook Air laptop M3 chip",
      category: "MacBook Air",
      img: "https://www.apple.com/v/macbook-air/o/images/overview/trade_in__gh5aoaws28mm_large.jpg",
      price: 15899,
      rating: 3.8,
      cartStatus: false,
      description:
        "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    },
    {
      id: 4,
      title: "Apple 2021 Macbook Air",
      category: "MacBook Air",
      img: "https://m.media-amazon.com/images/I/710TJuHTMhL._AC_UY327_FMwebp_QL65_.jpg",
      price: 14899,
      rating: 3.9,
      cartStatus: false,
      description:
        "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
    },
    {
      id: 5,
      title: "Apple 2020 Macbook pro",
      category: "MacBook Pro",
      img: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SR180,120_QL70_.jpg",
      price: 188899,
      rating: 4.1,
      cartStatus: false,
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​ Space Grey​​​​​​​",
    },
    {
      id: 6,
      title: "Apple 2021 Macbook pro-Silver",
      category: "MacBook Pro",
      img: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY327_FMwebp_QL65_.jpg",
      price: 36699,
      rating: 4.2,
      cartStatus: false,
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​ Space Grey​​​​​​​",
    },
    {
      id: 7,
      title: "Apple 2021 Macbook pro-Space Grey",
      category: "MacBook Pro",
      img: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY327_FMwebp_QL65_.jpg",
      price: 21899,
      rating: 4.3,
      cartStatus: false,
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​ Space Grey​​​​​​​",
    },
    {
      id: 8,
      title: "Apple 2022 MacBook Pro Laptop with M2 chip",
      category: "MacBook Pro",
      img: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UY327_FMwebp_QL65_.jpg",
      price: 90899,
      rating: 4.4,
      cartStatus: false,
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​ Space Grey​​​​​​​",
    },
    {
      id: 9,
      title: "Apple 2022 12.9-inch iPad Pro",
      category: "iPad",
      img: "https://m.media-amazon.com/images/I/81rxOSprYqL._AC_UY327_FMwebp_QL65_.jpg",
      price: 122900,
      rating: 4.5,
      cartStatus: false,
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​ Space Grey​​​​​​​",
    },
    {
      id: 10,
      title: "iPad Air",
      category: "iPad",
      img: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_UY327_FMwebp_QL65_.jpg",
      price: 1672900,
      rating: 4.6,
      cartStatus: false,
      description:
        "The device was available initially with three storage sizes – 16, 32, and 64 GB[8][3] – and two varying connectivity options",
    },
    {
      id: 11,
      title: "iPad mini",
      category: "iPad",
      img: "https://m.media-amazon.com/images/I/71xAVVHscdL._AC_UY327_FMwebp_QL65_.jpg",
      price: 1432900,
      rating: 4.7,
      cartStatus: false,
      description:
        "The device was available initially with three storage sizes – 16, 32, and 64 GB[8][3] – and two varying connectivity options",
    },
    {
      id: 12,
      title: "Apple 2021 iPad mini",
      category: "iPad",
      img: "https://m.media-amazon.com/images/I/71o6PxcKkJL._AC_UY327_FMwebp_QL65_.jpg",
      price: 262900,
      rating: 3.8,
      cartStatus: false,
      description:
        "The device was available initially with three storage sizes – 16, 32, and 64 GB[8][3] – and two varying connectivity options",
    },
    {
      id: 13,
      title: "Apple iPhone 13",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg",
      price: 61999,
      rating: 3.9,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 14,
      title: "Apple iPhone 14 plus",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY327_FMwebp_QL65_.jpg",
      price: 98999,
      rating: 3.9,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 15,
      title: "Apple iPhone 14 Pro",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_UY327_FMwebp_QL65_.jpg",
      price: 123999,
      rating: 3.8,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 16,
      title: "CEX Apple iPhone 5S",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/515A-4CvHOL._AC_UY327_FMwebp_QL65_.jpg",
      price: 12999,
      rating: 3.8,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 17,
      title: "Apple iPhone 11",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/71QE00iB9IL._AC_UY327_QL65_.jpg",
      price: 10999,
      rating: 4.8,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 18,
      title: "Apple iPhone SE",
      category: "iPhone",
      img: "https://m.media-amazon.com/images/I/61-MT8AQAPL._AC_UY327_FMwebp_QL65_.jpg",
      price: 54900,
      rating: 4.7,
      cartStatus: false,
      description:
        "The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones, such as the main models and others, such as the mini or pro editions.",
    },
    {
      id: 19,
      title: "Apple Watch Altra",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY327_FMwebp_QL65_.jpg",
      price: 82990,
      rating: 4.6,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 20,
      title: "Apple Watch Series ",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/91EJunhMFBL._AC_UY327_FMwebp_QL65_.jpg",
      price: 77900,
      rating: 4.5,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 21,
      title: "Apple Watch Series 8",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/71FeKU41G1L._AC_UY327_FMwebp_QL65_.jpg",
      price: 55899,
      rating: 4.4,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 22,
      title: "Apple Watch Series 7",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/71uOgDy40BL._AC_UY327_FMwebp_QL65_.jpg",
      price: 43605,
      rating: 4.3,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 23,
      title: "Apple Watch SE",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/71YAsNWuoPL._AC_UY327_FMwebp_QL65_.jpg",
      price: 33899,
      rating: 4.2,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 24,
      title: "Apple Watch SE (2nd Gen)",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/71yofUBMxSL._AC_UY327_FMwebp_QL65_.jpg",
      price: 26400,
      rating: 4.1,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 25,
      title: "Apple Watch Ultra",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY327_FMwebp_QL65_.jpg",
      price: 290400,
      rating: 4.8,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 26,
      title: "PLATINUM Luxury Apple Watch",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/51LB6PK3GoL._AC_UY327_FMwebp_QL65_.jpg",
      price: 10400,
      rating: 3.8,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 27,
      title: "Apple Watch Series 8",
      category: "Watch",
      img: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_UY327_FMwebp_QL65_.jpg",
      price: 91400,
      rating: 3.9,
      cartStatus: false,
      description:
        "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.",
    },
    {
      id: 28,
      title: "Apple AirPods",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UY327_FMwebp_QL65_.jpg",
      price: 11999,
      rating: 3.9,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 29,
      title: "Apple AirPods Pro",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
      price: 26900,
      rating: 3.9,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 30,
      title: "Apple in-Ear Wired EarPods",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/418AP8pw3KL._AC_UY327_FMwebp_QL65_.jpg",
      price: 6900,
      rating: 4.1,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 31,
      title: "Apple AirPods pro connect",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/31Eamp1KvHL._AC_UY327_FMwebp_QL65_.jpg",
      price: 61900,
      rating: 3.9,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 32,
      title: "Apple AirPods max",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg",
      price: 62900,
      rating: 4.1,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 33,
      title: "Apple Wireless buds",
      category: "Airpods",
      img: "https://m.media-amazon.com/images/I/51YAZhd080L._AC_UY327_QL65_.jpg",
      price: 22900,
      rating: 4.2,
      cartStatus: false,
      description:
        "AirPods are wireless Bluetooth earbuds designed by Apple Inc. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory.[4][5] The most recent model, AirPods (3rd generation), are a replacement to the 1st and 2nd generation models, although the 2nd generation is still sold on Apple's website. These models are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max",
    },
    {
      id: 34,
      title: "Apple Pro Display XDR",
      category: "Tv & Home",
      img: "https://m.media-amazon.com/images/I/71pEQi2sX3L._AC_UY327_FMwebp_QL65_.jpg",
      price: 523376,
      rating: 4.3,
      cartStatus: false,
      description:
        "Apple TV is a digital media player and microconsole developed and marketed by Apple Inc. It is a small network appliance hardware that plays received media data such as video and audio to a television set or external display.",
    },
    {
      id: 35,
      title: "Buy Apple TV 4K",
      category: "Tv & Home",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=538&hei=535&fmt=jpeg&qlt=95&.v=1664896361408",
      price: 583376,
      rating: 4.4,
      cartStatus: false,
      description:
        "Apple TV is a digital media player and microconsole developed and marketed by Apple Inc. It is a small network appliance hardware that plays received media data such as video and audio to a television set or external display.",
    },
    {
      id: 36,
      title: "Apple 2021 iMac with 4.5K Retina Display",
      category: "Tv & Home",
      img: "https://m.media-amazon.com/images/I/61AWSyzWrmS._AC_UY327_FMwebp_QL65_.jpg",
      price: 104990,
      rating: 4.6,
      cartStatus: false,
      description:
        "Apple TV is a digital media player and microconsole developed and marketed by Apple Inc. It is a small network appliance hardware that plays received media data such as video and audio to a television set or external display.",
    },
    {
      id: 37,
      title: "Apple Retina Display",
      category: "Tv & Home",
      img: "https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_UY327_FMwebp_QL65_.jpg",
      price: 174990,
      rating: 3.9,
      cartStatus: false,
      description:
        "Apple TV is a digital media player and microconsole developed and marketed by Apple Inc. It is a small network appliance hardware that plays received media data such as video and audio to a television set or external display.",
    },
    {
      id: 38,
      title: "Apple Lightning to USB Cable",
      category: "Entertainment",
      img: "https://m.media-amazon.com/images/I/51hhaBx5PCL._AC_UY327_FMwebp_QL65_.jpg",
      price: 1990,
      rating: 4.5,
      cartStatus: false,
      description:
        "Apps like ShareTheMeal, FaceTime, and Wakeout! inspired people to give back, stay in touch with loved ones, and take care of themselves. Ted lassoed the hearts of Apple TV+ viewers with his unremitting positive attitude, while Tom Hanks guided them through choppy waters in “Greyhound,” and Apple Music fans searched for the “Dance Monkey” lyrics while watching their favorite artists livestream from their homes. There were podcasts like “SmartLess” and NPR’s “Code Switch” to binge, Apple Arcade games like “Sneaky Sasquatch” to play, and a new favorite Apple Fitness+ workout waiting to be discovered.",
    },
    {
      id: 39,
      title: "Apple Blossoms One Size Pocket Style",
      category: "Entertainment",
      img: "https://m.media-amazon.com/images/I/41TRkSqp4xL._AC_UY327_FMwebp_QL65_.jpg",
      price: 18990,
      rating: 4.5,
      cartStatus: false,
      description:
        "Apps like ShareTheMeal, FaceTime, and Wakeout! inspired people to give back, stay in touch with loved ones, and take care of themselves. Ted lassoed the hearts of Apple TV+ viewers with his unremitting positive attitude, while Tom Hanks guided them through choppy waters in “Greyhound,” and Apple Music fans searched for the “Dance Monkey” lyrics while watching their favorite artists livestream from their homes. There were podcasts like “SmartLess” and NPR’s “Code Switch” to binge, Apple Arcade games like “Sneaky Sasquatch” to play, and a new favorite Apple Fitness+ workout waiting to be discovered.",
    },
    {
      id: 40,
      title: "Apple Music Model Silicone buds",
      category: "Entertainment",
      img: "https://m.media-amazon.com/images/I/51rPdMbm8LL._AC_UL480_FMwebp_QL65_.jpg",
      price: 1540,
      rating: 4.8,
      cartStatus: false,
      description:
        "Apps like ShareTheMeal, FaceTime, and Wakeout! inspired people to give back, stay in touch with loved ones, and take care of themselves. Ted lassoed the hearts of Apple TV+ viewers with his unremitting positive attitude, while Tom Hanks guided them through choppy waters in “Greyhound,” and Apple Music fans searched for the “Dance Monkey” lyrics while watching their favorite artists livestream from their homes. There were podcasts like “SmartLess” and NPR’s “Code Switch” to binge, Apple Arcade games like “Sneaky Sasquatch” to play, and a new favorite Apple Fitness+ workout waiting to be discovered.",
    },
    {
      id: 41,
      title: "Apple USB Studio Recording Microphone",
      category: "Entertainment",
      img: "https://m.media-amazon.com/images/I/61MF838vt5L._AC_UL480_FMwebp_QL65_.jpg",
      price: 190540,
      rating: 4.2,
      cartStatus: false,
      description:
        "Apps like ShareTheMeal, FaceTime, and Wakeout! inspired people to give back, stay in touch with loved ones, and take care of themselves. Ted lassoed the hearts of Apple TV+ viewers with his unremitting positive attitude, while Tom Hanks guided them through choppy waters in “Greyhound,” and Apple Music fans searched for the “Dance Monkey” lyrics while watching their favorite artists livestream from their homes. There were podcasts like “SmartLess” and NPR’s “Code Switch” to binge, Apple Arcade games like “Sneaky Sasquatch” to play, and a new favorite Apple Fitness+ workout waiting to be discovered.",
    },
    {
      id: 42,
      title: "Apple new Tv",
      category: "Entertainment",
      img: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-apple-tv_2x.png",
      price: 61540,
      rating: 3.8,
      cartStatus: false,
      description:
        "Apps like ShareTheMeal, FaceTime, and Wakeout! inspired people to give back, stay in touch with loved ones, and take care of themselves. Ted lassoed the hearts of Apple TV+ viewers with his unremitting positive attitude, while Tom Hanks guided them through choppy waters in “Greyhound,” and Apple Music fans searched for the “Dance Monkey” lyrics while watching their favorite artists livestream from their homes. There were podcasts like “SmartLess” and NPR’s “Code Switch” to binge, Apple Arcade games like “Sneaky Sasquatch” to play, and a new favorite Apple Fitness+ workout waiting to be discovered.",
    },
    {
      id: 43,
      title: "Apple Airtag",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000",
      price: 6540,
      rating: 4.4,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 44,
      title: "Apple HomePod",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654",
      price: 697540,
      rating: 4.4,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 45,
      title: "Apple Gift Card",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054",
      price: 127540,
      rating: 3.7,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 46,
      title: "Apple Leather Wallet with",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPX3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1661458144539",
      price: 17540,
      rating: 4.3,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 47,
      title: "Apple Leather Wallet with",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPX3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1661458144539",
      price: 1237540,
      rating: 3.8,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 48,
      title: "HomePod mini - Yellow",
      category: "Accessorires",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925510000",
      price: 12340,
      rating: 3.9,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 49,
      title: "Apple Charger",
      category: "Accessorires",
      img: "https://m.media-amazon.com/images/I/51z-CilKrzL._AC_UY327_FMwebp_QL65_.jpg",
      price: 1340,
      rating: 4.1,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 50,
      title: "Apple Lightning Headphone Jack Adapter",
      category: "Accessorires",
      img: "https://m.media-amazon.com/images/I/41C5VPNqasL._AC_UY327_FMwebp_QL65_.jpg",
      price: 10340,
      rating: 4.2,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 51,
      title: "Apple Phone Pandit",
      category: "Accessorires",
      img: "https://m.media-amazon.com/images/I/41QwQK11UpL._AC_UY327_FMwebp_QL65_.jpg",
      price: 106342,
      rating: 4.6,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
    {
      id: 52,
      title: "Apple Phone pro",
      category: "Accessorires",
      img: "https://images-eu.ssl-images-amazon.com/images/I/815KnP2wjDS._AC_UL160_SR160,160_.jpg",
      price: 143342,
      rating: 4.8,
      cartStatus: false,
      description:
        "Well-designed cases, covers, screen overlays, watch bands, camera attachments, and Bluetooth accessories, complement Apple devices without interfering with their operation. As you create accessories for Apple products, follow the design guidelines and test your prototypes to make sure they meet the necessary requirements.",
    },
  ];

  useEffect(() => {
    //run some logic
    if (query === "") {
      setSuggation([]);
    } else {
      // console.log(query);
      let newSuggestions = products.filter((item) => {
        return item.title.toLowerCase().indexOf(query) !== -1 ? true : false;
      });
      setSuggation(newSuggestions);
    }
  }, [query]);

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <p className={styles.label} style={{ color: "rgb(196, 194, 194)" }}>{navItem.label}</p>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                bgColor={"rgb(66,68,70)"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        padding={"5px"}
        fontSize={"16px"}
        height={"25px"}
        color={"white"}
        className={styles.searchInput}
      />
      <div className={styles.searchLogo} style={{ marginTop: "4px", color: "white" }}>
        <span style={{ cursor: "pointer" }}>
          <FaSearchPlus
            cursor={"pointor"}
            onClick={() => console.log("humTum")}
          />
        </span>
      </div>
      {suggation.length > 0 && (
        <Box
          border={"1px solid"}
          maxH={"200px"}
          position={"absolute"}
          w={"30%"}
          left={"41%"}
          top={"43px"}
          zIndex={"10"}
          bg={"black"}
          borderRadius={"5px"}
          overflow={"hidden scroll"}
        >
          {suggation.map((item) => {
            return (
              <Link
                onClick={() => {
                  setQuery("");
                }}
                to={`/product/${item.id}`}
              >
                <Text color={"whiteAlpha.700"} cursor={"pointer"}>
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"whiteAlpha.600"}
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"whiteAlpha.700"}
            _groupHover={{ color: "white" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
