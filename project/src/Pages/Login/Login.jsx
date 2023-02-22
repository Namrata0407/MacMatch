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
import styles from "./Login.module.css";
import { useToast } from '@chakra-ui/react'


function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const toast = useToast()
  const { loginUser,isAuth } = useContext(AuthContext);
  // console.log('auth',isAuth)
  // all toasts are here
  const wrongEmail=()=>{
    toast({
      title: 'Wrong Email or Password.',
      description: "Please enter right email or password!!!",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  const loginSuccess=()=>{
    toast({
      title: 'Login Successful.',
      description: "Thank You For Login!!!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
// all toasts are here
  

  const submitLogin = async () => {
    setload(true);
    // console.log(load);
    try {
      let res = await fetch(`https://thankful-loafers-hare.cyclic.app/usersData`);
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem('auth',true)
          localStorage.setItem('name',data[i].name)
          loginUser(data[i].name);
          // console.log(data[i].name);
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
        navigate("/");
      }

      console.log(Auth);
    } catch (error) {
      setload(false);
      console.log(error);
    }
    setemail("");
    setPassword("");
    window.location.reload()
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading
          fontFamily="cursive"
          color="rgb(45,45,47)"
          textAlign="center"
        >
          Sign in
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            <Link color="blue" href="/signup" fontWeight={'600'}>
              Signup
            </Link>
          </FormHelperText>
          <FormHelperText>
            Go to admin panel{" "}
            <Link color="blue" fontWeight={'600'} href="/signinadmin">
              Signin
            </Link>
          </FormHelperText>
          <Button
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(45,45,47)"
            onClick={submitLogin}
            _hover={{
              bg: "rgb(4,4,4)",
            }}
          >
            <span className={styles.loginButton}>Sign in</span>
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
