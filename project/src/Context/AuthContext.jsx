import { useState } from "react";
// import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";

// export const AuthContext = createContext();
import { createContext, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
//  const userAuthContext = createContext();
export const AuthContext = createContext()

export const logoutAdmin = ()=>{
  localStorage.clear()
}

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  const toast = useToast();

//new code 
async function logIn(email, password) {
  // console.log("namratatktjg");
  try {
    let data =  await signInWithEmailAndPassword(auth, email, password);
   // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast({
      title: `Some Error`,
      description: `${error.message}`,
      status: "error",
      duration: 9000,
      isClosable: true,
      position:'top'
    });
  }

}
async function signUp(email, password,name) {

  try {
    let createUser = await  createUserWithEmailAndPassword(auth, email, password).then((res) =>{
      let user = res.user;
      updateProfile(user,{
        displayName:name
      })
      toast({
        title: "Signup Successful.",
        description: "You Can Login Now",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    });
  
    console.log(createUser);
  
    return createUser;
  } catch (error) {
    console.log(error.message.Error);

    // alert(error.message);
    toast({
      title: `Some Error`,
      description: `${error.message}`,
      status: "error",
      duration: 9000,
      isClosable: true,
      position:'top'
    });
  }

  
}
function logOut() {
  logoutSuccess();
  setIsAuth(false);
  console.log(auth)
  return signOut(auth);
}

function googleSignIn() {
  const googleAuthProvider = new GoogleAuthProvider();
  // console.log(auth.uid);
  return signInWithPopup(auth, googleAuthProvider);
}

function setUpRecaptha(number) {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {},
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, number, recaptchaVerifier);
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    // console.log("Auth", currentuser);
    setUser(currentuser);
  });

  return () => {
    unsubscribe();
  };
}, []);




  const loginUser = (data) => {
    setIsAuth(true);
    setName(data);
  };

  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 5000,
      isClosable: true,
      position:'top'
    });
  };

  const logoutUser =async () => {
    // alert("User logged out Successfull!!");
    if(auth){
      await signOut(auth);
    }
    console.log(auth);
  //  signOut(auth)
    logoutSuccess();
    setIsAuth(false);
    localStorage.setItem("auth", false);
    localStorage.setItem("name", "");
    localStorage.removeItem("photoUrl")
    window.location.reload();
    // navigate('/signin')
  };

  return (
    <AuthContext.Provider value={{ 
      isAuth, loginUser, logoutUser, name ,
      user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        setUpRecaptha,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;


