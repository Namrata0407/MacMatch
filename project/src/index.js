import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <ChakraProvider>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ChakraProvider>
    </AuthContextProvider>
  </BrowserRouter>
);


