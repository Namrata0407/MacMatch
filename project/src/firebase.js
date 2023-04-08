// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCuMrAoLoJmtjhVTr-XuENXqU1nq8Ri4nY",
  authDomain: "authproject-6d620.firebaseapp.com",
  projectId: "authproject-6d620",
  storageBucket: "authproject-6d620.appspot.com",
  messagingSenderId: "192310741646",
  appId: "1:192310741646:web:0872e1d7135044839e17df",
  measurementId: "G-H9C2M0M2WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;