import * as React from "react";
import react, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Pincode from 'react-pincode';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { grey, red } from "@mui/material/colors";
import { Text } from "@chakra-ui/react";

export default function AddressForm() {
  const {user} = useContext(AuthContext);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [country, setCountry] = useState("");
  const [pincodeData, setPincodeData] = useState({});


  console.log(user);
 
  React.useEffect(() =>{
    if(pincodeData.city){
      console.log("dsjksjdjnsjnds");
      let lengthName = user.displayName.split(" ").length;
      setFName(user.displayName.split(" ")[0]);
      setLName(user.displayName.split(" ")[lengthName-1]);
      setCity(pincodeData.district);
      setState(pincodeData.stateName);
      setCountry("India");
      setAddress(pincodeData.areaName +" "+ pincodeData.city+ " "+pincodeData.stateName);
    }
  
    const details = {fname, lname, address, city, state, code, country};

    localStorage.setItem("details", JSON.stringify(details));
  },[pincodeData.areaName])

  if(pincodeData.city  && city === ""){
    console.log("dsjksjdjnsjnds")
    setCity(pincodeData.district);
    setState(pincodeData.stateName);
    setCountry("India");
    setAddress(pincodeData.areaName +" "+ pincodeData.city+ " "+pincodeData.stateName);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setFName(e.target.value)}
            value={fname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => setLName(e.target.value)}
            value={lname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
         
         
          <Pincode 
      
        Container={{height:"10px"}}
       
        //   pincodeContainer={{height:"0px"}}
           pincodeInput={{width:'200px',height:"20px",marginTop:"25px",borderBottom:"1px solid grey"}}
           cityContainer={{height:"0px"}}
           districtContainer={{height:"0px"}}
           districtInput={{width:'200px',opacity:"0",height:"0px"}}
           stateInput={{opacity:"0",height:"0px",padding:"0px"}}
           stateContainer={{height:"0px"}}
           cityInput={{opacity:"0",height:"0px",padding:"0px"}}
           areaInput={{width:'200px',opacity:"0",height:"0px"}}
           areaContainer={{height:"0px"}}
           invalidError="Please check pincode"
           lengthError="check length"
           getData={(data) =>{
              setPincodeData(data)
              console.log(data)
             }}
         />
   

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </Grid>


      
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
