import React from 'react';
import './serviceProviderProfile.css'; // Import the CSS file for styling
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Formik, Field, Form } from "formik";
import portfolioCover from './portfolioCover.png';
import Coverphoto from '../Portfolio/Cover_photo/Coverphoto'


const ServiceProviderProfile = () => {
  return (
    <div style={{ width:'100%',height:"auto", marginTop:"5%",display:"flex"}}>
      <div className= "portfolio_Cover" >
      <Row>

      <img src={portfolioCover} className='Portfolio_CoverPhoto' alt='Cover Photo' />

      <br></br>
      <br></br>
      <Button style={{padding:"1px", width:"190px", marginTop:"30px"}}> Change Cover Photo </Button>
    </Row>
<br></br>
<Row>
  <Col xs={6} lg={4}> <Coverphoto/> </Col>
  <Col xs={6} lg={4}> name </Col>
  <Col xs={6} lg={4}> button</Col>
</Row>

<Row>
  <Col xs={12} lg={3}> contact number</Col>
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



      </div>





    </div>
  );
};

export default ServiceProviderProfile;
