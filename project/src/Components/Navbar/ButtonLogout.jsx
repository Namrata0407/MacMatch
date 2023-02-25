import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
  useDisclosure,
  
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";

export default function ButtonLogout({logout}) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate()

  const logOutSuccess =()=>{
    logout()
    navigate("/signin")
  }

  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button onClick={onToggle} className={styles.name}>
            Logout
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Are you sure want to LOGOUT?</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={onToggle}>
                NO
              </Button>
              <Button colorScheme="red" onClick={logOutSuccess}>
                YES
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

