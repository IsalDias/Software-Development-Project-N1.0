import React from 'react';
import './serviceProviderProfile.css'; // Import the CSS file for styling
import { Button, Col, Container, Row,Image } from 'react-bootstrap';
import { Formik, Field, Form } from "formik";
import portfolioCover from './portfolioCover.png';
import profilePicture from '../Portfolio/profilePicture.jpeg';


const ServiceProviderProfile = () => {
  return (
    <div style={{ width:'100%',height:"auto", marginTop:"5%",display:"flex"}}>

<div className="profile">

<div className="profileRight">
  <div className="profileRightTop">
    <div className="profileCover">
      <Container>
      <Row>
      <img
        className="profileCoverImg"
        src={portfolioCover}
        alt=""
      />
      </Row>
      </Container>

      <Container>
      <Row >
        <Col xs={6} lg={3}>
      <img
        className="profileUserImg"
        src={profilePicture}
        alt=""
      />
      </Col>

      <Col xs={6} lg={9} style={{padding:"0%"}}>
      
      <h4 className='portfolio_heading' >Imagine Entertainment</h4>
      </Col>
      </Row>
      </Container>
    </div>

    <div>
    <Container>
      <Row style={{position:"relative" ,top:"450px",padding:"0% 5%" }}>
      <Col xs={12} lg={3}> contact number: </Col>
      <Col xs={12} lg={3}> E-mail  </Col>
      <Col xs={12} lg={3}> Address </Col>
      <Col xs={12} lg={3}> web </Col>
      </Row>
    </Container>
    </div>
    <div className='description'>
    <Formik>
    <Form>
    <Field
                name="portfolioDescription"
                type="text"
                placeholder="Description"
                className="custom"
              />
    </Form>
  </Formik>

    </div>












  </div>
</div>
</div>



























      {/* <div className= "portfolio_Cover" >
      <Row>

      <img src={portfolioCover} className='Portfolio_CoverPhoto' alt='Cover Photo' />

      <br></br>
      <br></br>
      <Button style={{padding:"1px", width:"190px", marginTop:"30px"}}> Change Cover Photo </Button>
    </Row>
<br></br>

<Row>
        <Col xs={4} lg={4} className="d-flex justify-content-left">
          <Image src={profilePicture} roundedCircle  />

        </Col>



  <Col xs={4} lg={4} > 
  
  <h1 className='portfolio_heading' >  Imagine Entertainment </h1>
  
   </Col>
  <Col xs={4} lg={4} style={{padding:'5%' }}> <Button style={{backgroundColor:"green", borderColor:"transparent", width:"40%"}}> Whatsapp </Button> </Col>
</Row>



<Row>
  <Col xs={12} lg={3}> contact number: </Col>
  <Col xs={12} lg={3}> E-mail </Col>
  <Col xs={12} lg={3}> Address</Col>
  <Col xs={12} lg={3}> web</Col>
</Row>


<Row>
  <Formik>
    <Form>
    <Field
                name="portfolioDescription"
                type="text"
                placeholder="Description"
                className="custom"
              />
    </Form>
  </Formik>
</Row>

<Row>
  packages component
</Row>

<Row>
<Col xs={12} lg={4}> back</Col>
  <Col xs={12} lg={4}> Book Now </Col>
  <Col xs={12} lg={4}> Make an Appointment</Col>
</Row>



      </div> */}





    </div>
  );
};

export default ServiceProviderProfile;
