import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "../../Redux/cart/cart.action";

// const products = [
//   {
//     name: "Product 1",
//     desc: "A nice thing",
//     price: "$9.99",
//   },
//   {
//     name: "Product 2",
//     desc: "Another thing",
//     price: "$3.45",
//   },
//   {
//     name: "Product 3",
//     desc: "Something else",
//     price: "$6.51",
//   },
//   {
//     name: "Product 4",
//     desc: "Best thing of all",
//     price: "$14.11",
//   },
//   { name: "Shipping", desc: "", price: "Free" },
// ];

// const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

let details;
// JSON.parse(localStorage.getItem("details")) || {};
let cardDetails;
// = JSON.parse(localStorage.getItem("cardDetails")) || {};
let totalPrice = 0;

export default function Review() {
  const products = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProduct());
    totalPrice = localStorage.getItem("totalPrice") || 0;
    details = JSON.parse(localStorage.getItem("details")) || {};
    cardDetails = JSON.parse(localStorage.getItem("cardDetails")) || {};
  }, []);

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: cardDetails?.name },
    {
      name: "Card number",
      detail: `xxxx-xxxx-xxxx-${cardDetails?.card.slice(-4)}`,
    },
    { name: "Expiry date", detail: `${cardDetails?.date}` },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products?.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">₹ {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹ {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {details?.fname} {details?.lname}
          </Typography>
          <Typography gutterBottom>
            {details?.address},{details?.city},{details?.state}, {details?.code},{" "}
            {details?.country}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
