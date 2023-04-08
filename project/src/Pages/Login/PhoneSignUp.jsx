import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form,FormControl, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import { AuthContext } from "../../Context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha,loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(`+${number}`);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      let data = await result.confirm(otp);
      if(data.user.phoneNumber){
        localStorage.setItem("auth", true);
        localStorage.setItem("name", "LoggedIn");
         loginUser("LoggedIn");
        navigate("/");
        window.location.reload();
      }
    //  console.log(data);
     // navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(number);

  return (
    <>
      <Container style={{ width: "400px" ,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", display:"flex",
    alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"90px",padding:"20px",marginBottom:"90px"}}>
          <Row>
            <Col>
      <div className="p-4 box">
        <h2 style={{padding:"10px"}} className="mb-3">Please Enter Mobile Number</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <PhoneInput 
              defaultCountry="IN"
               value={number} 
               onChange={setNumber} 
               placeholder="Enter Phone Number" 
            />  */}
            <PhoneInput
  country={'in'}
  value={number}
  onChange={setNumber} 
  placeholder="Enter Phone Number" 
/>
     
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/login">
              <Button style={{backgroundColor:"gray",color:"white",padding:"5px",borderRadius:"3px",
            paddingLeft:"10px",paddingRight:"10px",marginTop:"15px"}} variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button  style={{backgroundColor:"#085ed6",color:"white",padding:"5px",borderRadius:"3px",
            paddingLeft:"10px",paddingRight:"10px",marginTop:"15px"}} type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp" >
            <Form.Control
            style={{border:"2px solid grey",padding:"6px", width:"100%"}}
              type="otp"
               placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button style={{backgroundColor:"gray",color:"white",padding:"5px",borderRadius:"3px",
            paddingLeft:"10px",paddingRight:"10px",marginTop:"15px"}} variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button  style={{backgroundColor:"#085ed6",color:"white",padding:"5px",borderRadius:"3px",
            paddingLeft:"10px",paddingRight:"10px",marginTop:"15px"}} type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
            </div>
            </Col>
          </Row>
        </Container> 
    </>
  );
};

export default PhoneSignUp;