import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./LoginAdmin.module.css";
import { useToast } from "@chakra-ui/react";

function LoginAdmin() {
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
  const [load, setload] = useState(false);
  // const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);
  const toast = useToast();

  // *************************************************************
  const navigate = useNavigate();
  const userEmail = "admin@macmatch.com";
  const userPass = "admin";
  const [email,setEmail] = useState(userEmail);
  const [password,setPassword] = useState(userPass);

  const handleLoginAdmin = () => {
      if(email === userEmail && userPass === password){
          localStorage.setItem("adminAuth", "true");
      navigate('/admin')
      window.location.reload(true);
      } else{
          alert("Invalid credentials ");
      }
  }
 // *************************************************************
  const wrongEmail = () => {
    toast({
      title: "Wrong Email or Password.",
      description: "Please enter right email or password!!!",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const loginSuccess = () => {
    toast({
      title: "Login Successful.",
      description: "Thank You For Login, Admin!!!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const submitLogin = async () => {

    setload(true);
    // console.log(load);
    try {
      let res = await fetch(
        `https://mockserver-rny6.onrender.com/adminMacMatch`
      );
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem("adminAuth", data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        // alert("Please enter right email or password!");
        wrongEmail();
      } else {
        // alert("Login Successfull!");
        loginSuccess();
        navigate("/admin");
      }

      console.log(Auth);
    } catch (error) {
      setload(false);

      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading fontFamily="cursive" color="rgb(45,45,47)" textAlign="center">
          Admin Sign in
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password Address"
            type="password"
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{" "}
            <Link color="blue" fontWeight={"600"} href="/signup">
              Signup
            </Link>
          </FormHelperText>
          <Button
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(45,45,47)"
            _hover={{
              bg: "rgb(4,4,4)",
            }}
            // onClick={submitLogin}
            onClick={()=>handleLoginAdmin()}
          >
            <span className={styles.loginButton}>Sign in</span>
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default LoginAdmin;
