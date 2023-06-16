import React from 'react'
import Buttontabs from '../../../Components/Tabs/Buttontabs'
import './events_1.css'
import { Row, Col,Button } from 'react-bootstrap';

function Events_1() {
    return (
      <div className='Events_first_1' style={{color:"white"}}>
        <Row style={{margin:"0px"}}>
          <Col xs={12} lg={6}>
          <h1 style={{color:"white", fontWeight:"bold",padding:"30px",fontSize:"50px"}}> Your Events </h1>
          </Col>
          <Col>
          <Button href='/events/create_events'
          style={{margin:"50px",position:'relative',left:'700px',color:"black",backgroundColor:'white',borderColor:"white"}}> Create Event</Button>
          </Col>
        </Row>
        
          <Buttontabs/>
      </div>
    );
  }
  
  export default Events_1;