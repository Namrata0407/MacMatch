import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Signup from "./../Pages/Signup/Signup";
import Body from "./../Pages/HomePage/Body/Body";
import Login from "./../Pages/Login/Login";
import LoginAdmin from "./../Pages/LoginAdmin/LoginAdmin";
import ProductStore from "../Pages/ProductStore";
import SingleProductPage from "../Pages/SingleProductPage";
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import Shipping from "../Pages/Shipping";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AdminOrders from "../Admin/Pages/AdminOrders";
import AdminProducts from "../Admin/Pages/AdminProducts";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminPricing from "../Admin/Pages/AdminPricing";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PrivateRouteAdmin from "./PrivateRoute/PrivateRouteAdmin";
import Navbar2 from "./Navbar/Navbar2";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import AdminNavbar from "../Admin/Components/adminNavbar";
import AdminLogin from "../Pages/AuthLoginAdmin";
import PhoneSignUp from "../Pages/Login/PhoneSignUp";

const AllRoutes = () => {
  return (
    <Routes>
      {/* website pages */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <Body />
            <Footer />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <Signup />
            <Footer />
          </>
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <Login />
            <Footer />
          </>
        }
      />
      <Route
        path="/signinadmin"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <LoginAdmin />
            <Footer />
          </>
        }
      />
      <Route
        path="/store"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <ProductStore />
            <Footer />
          </>
        }
      />
      <Route
        path="/product/:id"
        element={
          <>
            <Navbar />
            <Navbar2 />
            <SingleProductPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <>
              <Navbar />
              <Navbar2 />
              <CartPage />
              <Footer />
            </>
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <>
              <Navbar />
              <Navbar2 />
              <Checkout />
              <Footer />
            </>
          </PrivateRoute>
        }
      />
      <Route
        path="/shipping"
        element={
          <PrivateRoute>
            <>
              <Navbar />
              <Navbar2 />
              <Shipping />
              <Footer />
            </>
          </PrivateRoute>
        }
      />

<Route path='/phone' element={
  <>
  <Navbar />
            <Navbar2 />

           <PhoneSignUp/>
            <Footer />
  </>

  }/>


    </Routes>
  );
};

export default AllRoutes;
