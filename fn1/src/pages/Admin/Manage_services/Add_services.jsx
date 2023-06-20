import React from 'react'
import { Button, Col, Row,Form } from "react-bootstrap";

const Add_services = () => {
  return (
    <div>
      <Form>
      <h1 className="Events_CreateEvents_heading1">Create Your Event</h1>
        <Row>
            <Col> 
            
            <Form.Label> Service Name: </Form.Label>
            <Form.Control
            type='text'
            
            /> 

            
            </Col>
            
        </Row>
      </Form>
    </div>
  )
}

export default Add_services
