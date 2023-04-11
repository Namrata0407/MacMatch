import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function PaymentForm() {
  const {user} = useContext(AuthContext)
  const [name, setName] = useState(user.displayName);
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setcvv] = useState("")

  const cardDetails = {
    name,
    card,
    date,
  };

  localStorage.setItem("cardDetails", JSON.stringify(cardDetails));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

   
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={name.length<1 ? true : false}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={card}
            type="number"
            helperText="please enter valid 16 digit number"
            onChange={(e) => setCard(e.target.value)}
            error={card.length!==16 ? true : false}
           
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <p style={{fontSize:"13px"}}>Expiry date*</p>
          <TextField
            required
            id="expDate"
            // label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            type="date"
            helperText="card expiry date"
            variant="standard"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            error={date.length<1 ? true : false}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cvv}
            type="number"
            onChange={(e) => setcvv(e.target.value)}
            error={cvv.length!==3 ? true : false}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
     
      
    </React.Fragment>
  );
}
