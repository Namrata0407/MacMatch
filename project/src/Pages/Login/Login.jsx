import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Login.module.css";
import { useToast } from "@chakra-ui/react";
import GoogleButton from "react-google-button";

function Login() {
  const [email, setemail] = useState("k@gmail.com");
  const [password, setPassword] = useState("1234");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { loginUser, logIn, user, googleSignIn, isAuth } =
    useContext(AuthContext);
  // console.log('auth',isAuth)
  // all toasts are here
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
      description: "Thank You For Login!!!",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
  };
  // all toasts are here


  
  


  
  const submitLogin = async () => {
    //e.preventDefault();
    // setload(true);
    // console.log(load);
    // try {
    //   let res = await fetch(
    //     `https://mockserver-rny6.onrender.com/usersData`
    //   );
    //   let data = await res.json();
    //   // console.log(data);
    //   let Auth = false;
    //   for (let i in data) {
    //     if (data[i].email === email && data[i].password === password) {
    //       Auth = true;
    //       localStorage.setItem("auth", true);
    //       localStorage.setItem("name", data[i].name);
    //       loginUser(data[i].name);
    //       // console.log(data[i].name);
    //       break;
    //     }
    //   }
    //   setload(false);
    //   if (Auth === false) {
    //     // alert("Please enter right email or password!");
    //     wrongEmail();
    //   } else {
    //     // alert("Login Successfull!");
    //     loginSuccess();
    //     navigate("/");
    //   }

    //   console.log(Auth);
    // } catch (error) {
    //   setload(false);
    //   console.log(error);
    // }

    // setError("");

    let Auth = false;
    try {
     let data = await logIn(email, password);
    //  console.log(data)
     if(data.user.displayName){
      console.log(data)
      localStorage.setItem("auth", true);
      localStorage.setItem("name", data.user.displayName);
      loginSuccess();
       loginUser(data.user.displayName);
      navigate("/");
      window.location.reload();
     }
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

    // if (user.displayName) {
    //   //  console.log(user.displayName);
    //   localStorage.setItem("auth", true);
    //   localStorage.setItem("name", user.displayName);
    //    loginUser(user.displayName);
    //   navigate("/");
    //   window.location.reload();
    // }
    //  if (Auth === false) {
    //   // alert("Please enter right email or password!");
    //   wrongEmail();
    // } else {
    //   // alert("Login Successfull!");
    //   loginSuccess();
    //   navigate("/");
    // }
    // setemail("");
    // setPassword("");
    // window.location.reload();
  };

  if (user?.displayName) {
    console.log("this is user", user);
  
  }

  const handleGoogleSignIn = async () => {
    // e.preventDefault();
    localStorage.removeItem("auth");
    localStorage.removeItem("name");
    try {
     let data = await googleSignIn();
      // navigate("/");

      if (data.user.displayName) {
         console.log(data.user);
        localStorage.setItem("auth", true);
        localStorage.setItem("name", data.user.displayName);
        localStorage.setItem("photoUrl",data.user.photoURL);
        loginUser(data.user.displayName);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading fontFamily="cursive" color="rgb(45,45,47)" textAlign="center">
          SignIn
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
            <Link color="blue" href="/signup" fontWeight={"600"}>
              Signup
            </Link>
          </FormHelperText>
          <FormHelperText>
            Go to admin panel{" "}
            <Link color="blue" fontWeight={"600"} href="/signinadmin">
              Signin
            </Link>
          </FormHelperText>

          
          <Button
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(45,45,47)"
            onClick={() => submitLogin()}
            _hover={{
              bg: "rgb(4,4,4)",
            }}
          >
            <span className={styles.loginButton}>Sign in</span>
          </Button>

          <div style={{ marginTop: "10px", display:"flex",
                alignItems:"center",justifyContent:"center" }}>
        <GoogleButton
          className="g-btn"
          type="dark"
          onClick={() => handleGoogleSignIn()}
        />
      </div>
      <RouterLink to="/phone">
                  <div style={{border:"2px solid green", color:"white",backgroundColor:"green",padding:"5.5px",display:"flex",
                alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
                    <Button style={{margin:"auto"}} variant="success" type="Submit">
                      Sign in with Phone
                    </Button>
                  </div>
                </RouterLink>
      
                
                

        </FormControl>
      </div>

     
    </div>
  );
}

export default Login;
