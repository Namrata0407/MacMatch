import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

const EmptyCart = () => {
  return (
    <Box>
      <Grid
        gap={"30px"}
        p={"30px"}
        // border="1px solid white"
        width={"70%"}
        m="auto"
        textAlign={"start"}
      >
        <Text as={"h1"} fontSize="4xl" fontWeight={"600"}>
          Your bag is empty.
        </Text>
        <Text>
          Buy online and get free two-day delivery on all in-stock items and
          free next-day delivery on iPhone.
        </Text>
        <Flex justify={"start"} gap="30px">
          <Link to={'/store'}>
            <Button
              bgColor={"#ebebeb"}
              color="black"
              borderRadius={"20px"}
              py={"30px"}
              px={"80px"}
            >
              Continue Shopping
            </Button>
          </Link>
        </Flex>
      </Grid>

      <Box borderTop="1px solid gray" borderBottom="1px solid gray">
        <Text p="20px">
          Need some help? Chat now (Opens in a new window)or call 1-800-APPLE.
        </Text>
      </Box>

      <Box position="relative" w="80%" p={"30px"} margin={"auto"}>
        <Image
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-new-arrivals-checkout-201804?wid=980&hei=400&fmt=jpeg&qlt=95&.v=1523551959954"
          alt="My Image"
          margin={"auto"}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="start"
        >
          <Box color="black" ml={"15%"} p="30px">
            <Text fontSize="3xl" fontWeight={500} textAlign="center">
              New Arrivals
            </Text>

            <Text fontWeight={400}> Check out the latest accessories.</Text>

            <Text color="blue" fontWeight={400}>
              Shop
            </Text>
          </Box>
        </Box>
      </Box>

      <Box p={"30px"} w="80%" margin={"auto"}>
        <Accordion allowMultiple>
          <AccordionItem p={6}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Questions About Buying
                    </Box>
                    {isExpanded ? (
                      // <MinusIcon fontSize="12px" />
                      <Icon as={MinusIcon} fontSize="12px" />
                    ) : (
                      <Icon as={AddIcon} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={6} textAlign="start">
                  {/* // start */}
                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          When will I get my items?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      By entering a zip code, you’ll get estimated delivery and
                      pickup dates for your items. You’ll get a final delivery
                      date after you place your order. Delivery estimates are
                      based on item availability and the shipping option you
                      choose. For pickup, you’ll choose a pickup date and store
                      during checkout. Learn more about Apple Shipping & Pickup
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Can I pick up my items at an Apple Store?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      Yes. If you choose pickup, you’ll select a store and a
                      pickup date for your items during checkout. Not all items
                      are available for pickup. We’ll send you a text message
                      when your items are ready for pickup. Learn more about
                      Apple Pickup
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How do I learn what my Apple Store is doing to make
                          shopping and services safer for customers?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      We’re putting safety first by taking extra measures to
                      ensure a clean, safer environment for our customers. This
                      includes health screenings, requiring the use of face
                      masks, and limiting store occupancy. We have also added
                      new pickup options for customers. You can find the latest
                      information for your local Apple Store via Find a Store
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What are my payment options?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      We accept Apple Pay(opens in a new window), most credit
                      and debit cards, PayPal, and Apple Store Gift Cards —
                      though PayPal, Apple Store Gift Cards, and financing
                      options may not be available for all products. Financing
                      options are also available to qualifying customers. You
                      can call 1‑800‑MY‑APPLE for more information. Learn more
                      about Apple Payment & Pricing
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How is sales tax calculated?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
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

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Does Apple offer an education discount?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      Yes. Apple offers special pricing for students, teachers,
                      administrators, staff members, and homeschooling programs.
                      If you think you qualify, visit the Apple Store for
                      Education(opens in a new window) to place your order.
                      Learn more about Apple Payment & Pricing
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What are my financing options?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      Now you can pay monthly and interest-free◊ for eligible
                      items when you choose to check out with Apple Card Monthly
                      Installments. And if you’re buying an iPhone, Mac, iPad,
                      or Apple Watch, you can add a trade-in and pay even
                      less.◊◊
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          When I buy from apple.com, does my iPhone come ready
                          to use?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
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

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is eSIM?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
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

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          When I buy an iPhone from Apple, will the eSIM be
                          activated?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
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

                  <AccordionItem p={4}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Are there differences between an iPhone for AT&T,
                          T-Mobile, Sprint, and Verizon?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
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
    </Box>
  );
};

export default EmptyCart;
