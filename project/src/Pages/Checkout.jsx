import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Text,
  Grid,
  Image,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "../Redux/cart/cart.action";
import { AddIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

let totalPrice;

const date = new Date(new Date().setDate(new Date().getDate() + 2));
const options = {
  weekday: "long",
  day: "numeric",
  month: "short",
  timeZone: "Asia/Kolkata",
};
const formattedDate = date.toLocaleDateString("en-IN", options);

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartReducer.cart);

  useEffect(() => {
    dispatch(getCartProduct());
    totalPrice = localStorage.getItem("totalPrice") || 0;
  }, []);

  return (
    <>
      <Flex
        justify="space-between"
        w={"80%"}
        m={"auto"}
        borderBottom="1px solid gray"
        py={4}
        gap="20px"
      >
        <Text fontSize={{ base: "xl", lg: "2xl" }}>Checkout</Text>
        <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <Text fontSize={{ base: "sm", lg: "xl" }}>Show Order Summary</Text>
        </Link>
      </Flex>

      <Grid p={6} gap="20px" borderBottom="1px solid gray" w={"80%"} m={"auto"}>
        <Text fontSize={{ base: "xl", lg: "3xl" }} fontWeight="400">
          How would you like to get your order?
        </Text>
        <Text fontSize={{ base: "sm", lg: "sm" }} fontWeight="200">
          Delivers to: <span>248001</span>
        </Text>
      </Grid>

      <Grid
        w={"80%"}
        m={"auto"}
        p={"20px"}
        borderBottom="1px solid gray"
        mb={"30px"}
        gap="30px"
      >
        <Text
          fontSize={{ base: "xl", lg: "3xl" }}
          fontWeight="500"
          textAlign={"start"}
        >
          In stock and ready to ship.
        </Text>
        <SimpleGrid
          columns={[1, 2, 3]}
          gap={"20px"}
          p={"20px"}
          // border="1px solid black"
        >
          {data?.map((item) => {
            return (
              <Flex
                direction={["column", "row", "row"]}
                gap={"10px"}
                p={"20px"}
              >
                <Image height={"60px"} src={item.img} alt="Dan Abramov" />
                <Text textAlign={["center", "start", "start"]}>
                  {item.title}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>

        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight={600}
          textAlign={"start"}
        >
          Select your delivery method:
        </Text>

        <Flex
          gap="20px"
          justify="space-between"
          direction={{ base: "column", md: "row", lg: "row" }}
        >
          <Grid
            border={"2px solid #0071E3"}
            width={{ base: "100%", md: "50%", lg: "50%" }}
            p={"15px"}
            borderRadius="20px"
            height={"100px"}
          >
            <Flex justify={"space-between"}>
              <Text fontSize={{ base: "sm", lg: "xl" }} fontWeight="600">
                Delivers {formattedDate}
              </Text>
              <Text fontSize={{ base: "sm", lg: "xl" }}>FREE</Text>
            </Flex>
            <Text textAlign={"start"} fontSize={{ base: "sm", lg: "lg" }}>
              Express Delivery
            </Text>
          </Grid>
          <Grid
            gap={"10px"}
            width={{ base: "100%", md: "50%", lg: "50%" }}
            textAlign={"start"}
            p="15px"
          >
            <Text fontSize={"xl"} fontWeight={"500"}>
              Some things to keep in mind:
            </Text>
            <Text>
              Standard deliveries are made between 8:00 a.m. and 6:00 p.m.,
              Monday-Saturday.
            </Text>
            <Text>
              Drivers may ask for verbal confirmation from a safe distance to
              satisfy the signature requirement, or may leave lower-cost
              shipments at your door with no signature required.
            </Text>
          </Grid>
        </Flex>
      </Grid>
      <Link to={"/shipping"}>
        <Flex justify={"center"}>
          <Button colorScheme="blue" size="lg">
            Continue to Shipping Address
          </Button>
        </Flex>
      </Link>

      <Box
        p={"30px"}
        width={{ base: "100%", md: "80%", lg: "80%" }}
        margin={"auto"}
      >
        <Accordion allowMultiple>
          <AccordionItem p={6}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontSize={{ base: "xl", lg: "3xl" }}
                      textAlign="left"
                    >
                      FAQ for Delivery
                    </Box>
                    {isExpanded ? (
                      // <MinusIcon fontSize="12px" />
                      <Icon as={MinusIcon} fontSize="12px" />
                    ) : (
                      <Icon as={AddIcon} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel textAlign="start">
                  {/* // start */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          // w={"100%"}
                        >
                          When will I get my items?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      By entering a zip code, you’ll get estimated delivery and
                      pickup dates for your items. You’ll get a final delivery
                      date after you place your order. Delivery estimates are
                      based on item availability and the shipping option you
                      choose. For pickup, you’ll choose a pickup date and store
                      during checkout. Learn more about Apple Shipping & Pickup
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          Can I pick up my items at an Apple Store?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      Yes. If you choose pickup, you’ll select a store and a
                      pickup date for your items during checkout. Not all items
                      are available for pickup. We’ll send you a text message
                      when your items are ready for pickup. Learn more about
                      Apple Pickup
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          How do I learn what my Apple Store is doing to make
                          shopping and services safer for customers?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      We’re putting safety first by taking extra measures to
                      ensure a clean, safer environment for our customers. This
                      includes health screenings, requiring the use of face
                      masks, and limiting store occupancy. We have also added
                      new pickup options for customers. You can find the latest
                      information for your local Apple Store via Find a Store
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          What are my payment options?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      We accept Apple Pay(opens in a new window), most credit
                      and debit cards, PayPal, and Apple Store Gift Cards —
                      though PayPal, Apple Store Gift Cards, and financing
                      options may not be available for all products. Financing
                      options are also available to qualifying customers. You
                      can call 1‑800‑MY‑APPLE for more information. Learn more
                      about Apple Payment & Pricing
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          How is sales tax calculated?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      By entering a zip code, you’ll get estimated delivery and
                      pickup dates for your items. You’ll get a final delivery
                      date after you place your order. Delivery estimates are
                      based on item availability and the shipping option you
                      choose. For pickup, you’ll choose a pickup date and store
                      during checkout. Learn more about Apple Shipping &
                      PickupThe tax listed on the Bag and Checkout pages is an
                      estimate. Your invoice will reflect the final total tax,
                      which includes state taxes, local taxes, and any
                      applicable fees. Learn more about Apple Payment & Pricing
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          Does Apple offer an education discount?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      Yes. Apple offers special pricing for students, teachers,
                      administrators, staff members, and homeschooling programs.
                      If you think you qualify, visit the Apple Store for
                      Education(opens in a new window) to place your order.
                      Learn more about Apple Payment & Pricing
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          What are my financing options?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      Now you can pay monthly and interest-free◊ for eligible
                      items when you choose to check out with Apple Card Monthly
                      Installments. And if you’re buying an iPhone, Mac, iPad,
                      or Apple Watch, you can add a trade-in and pay even
                      less.◊◊
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          When I buy from apple.com, does my iPhone come ready
                          to use?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      If you chose to connect your new iPhone to AT&T, Sprint,
                      T-Mobile, or Verizon at the time of purchase, it will
                      arrive ready to use. Just turn it on and follow the
                      onscreen instructions to set it up and activate with the
                      carrier. To activate with eSIM, you will need Wi-FI for
                      setup. If you’re buying an iPhone to use on your
                      employer's plan or a prepaid plan, you must contact your
                      carrier, or—if your organization employs more than 25
                      people—your employer, when your iPhone arrives to complete
                      activation. If you chose to connect with a carrier after
                      you buy your iPhone, you'll need to contact a carrier to
                      activate your iPhone or insert your own SIM card in order
                      to use cellular services on your iPhone. In some cases,
                      you need to contact your carrier to set up the SIM card
                      from your previous iPhone for use with a 5G network—or you
                      may need a new SIM card from your carrier.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          What is eSIM?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      An eSIM is a digital SIM that eliminates the need for a
                      physical SIM card. With eSIM, you can quickly and easily
                      transfer an existing cellular plan or get a new cellular
                      plan, all digitally. You can even store multiple eSIMs on
                      the same device and use two phone numbers at the same
                      time. And it’s more secure - someone can’t remove the
                      physical SIM card if your iPhone is lost or stolen. In
                      just a few simple steps, you are ready to make calls, send
                      messages, and browse the web. Learn more about eSIM. * Use
                      of eSIM requires a wireless service plan. Not all carriers
                      support eSIM. Use of eSIM in iPhone may be disabled when
                      purchased from some carriers. Check with your carrier for
                      details and restrictions. Learn more about eSIM and
                      carriers.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          When I buy an iPhone from Apple, will the eSIM be
                          activated?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      Carrier-connected iPhone SE, iPhone 12, iPhone 13, iPhone
                      13 mini, iPhone 14 and iPhone 14 Pro models will arrive
                      ready to activate with eSIM and can connect to your
                      cellular voice and data service without a physical SIM
                      card. If you choose “Connect to a carrier later” when you
                      buy your iPhone, you can activate with your service when
                      you receive your device. If you're asked to transfer your
                      SIM, follow the onscreen instructions to transfer service
                      from your previous iPhone. To learn more, visit
                      support.apple.com/kb/HT212780. If your carrier does not
                      support eSIM Quick Transfer, or if you don’t have a
                      previous iPhone, you will need to contact your carrier to
                      activate with eSIM. To learn more about carriers and eSIM
                      activation, visit:
                      https://support.apple.com/en-us/HT209096.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontSize={{ base: "sm", md: "17px", lg: "17px" }}
                          flex="1"
                          textAlign="left"
                        >
                          Are there differences between an iPhone for AT&T,
                          T-Mobile, Sprint, and Verizon?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      fontSize={{ base: "sm", lg: "16px", lg: "16px" }}
                    >
                      By entering a zip code, you’ll get estimated delivery and
                      pickup dates for your items. You’ll get a final delivery
                      date after you place your order. Delivery estimates are
                      based on item availability and the shipping option you
                      choose. For pickup, you’ll choose a pickup date and store
                      during checkout. Learn more about Apple Shipping &
                      PickupThe iPhone models for AT&T, T-Mobile, Sprint, and
                      Verizon are the same. If you choose to pay with an AT&T
                      Installment Plan, your iPhone will be locked to the
                      carrier. For details on network support, please see
                      support.apple.com/en-us/HT204039.
                    </AccordionPanel>
                  </AccordionItem>

                  {/* // end */}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <br />
          <br />
          <br />
          <DrawerHeader borderBottom={"1px solid gray"}>
            Your Order Total
          </DrawerHeader>

          <DrawerBody>
            <Flex
              justify={"space-between"}
              borderBottom={"1px solid gray"}
              p={6}
            >
              <Text>{data?.length} Items</Text>
              <Link to={"/cart"}>Edit Bag</Link>
            </Flex>

            <Flex
              justify={"space-between"}
              borderBottom={"1px solid gray"}
              p={6}
            >
              <Grid gap={4}>
                <Text>Subtotal</Text>
                <Text>Shipping</Text>
              </Grid>
              <Grid gap={4}>
                <Text>₹ {totalPrice}</Text>
                <Text textAlign={"end"}>FREE</Text>
              </Grid>
            </Flex>

            <Flex
              justify={"space-between"}
              borderBottom={"1px solid gray"}
              p={6}
            >
              <Grid gap={4}>
                <Text>Total</Text>
              </Grid>
              <Grid gap={4}>
                <Text textAlign={"end"}>₹ {totalPrice}</Text>
                <Text>
                  or from ₹ {(totalPrice / 6).toFixed(2)} Per Month with EMI◊◊
                </Text>
              </Grid>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Checkout;
