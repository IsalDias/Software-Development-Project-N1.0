import React, { useState } from 'react';
import './createEventsForm.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Create_Events_dropdown from '../../../Components/Customer_Components/Events/Create_Events_dropdown/Create_Events_dropdown'

const CreateEventsForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      eventName,
      eventDate,
      estimatedBudget,
      description
    };

    axios
      .post('http://localhost:3001/events', data)
      .then((response) => {
        // Handle success
        console.log('Event created successfully:', response.data);
        // Reset form values
        setEventName('');
        setEventDate('');
        setEstimatedBudget('');
        setDescription('');
      })
      .catch((error) => {
        // Handle error
        console.log('Error creating event:', error);
      });
  };

  return (
    <div>
      
      <div className="CreateEvents_form_full" style={{ overflowX: 'hidden' }}>
        <Form onSubmit={handleSubmit}>
        <h1 className="Events_CreateEvents_heading1">Create Your Event</h1>
          <Row>
            <Col>
              <Form.Group controlId="eventName">
                <Form.Label>Event Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="eventDate">
                <Form.Label>Event Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="estimatedBudget">
                <Form.Label>Estimated Budget (Rs.):</Form.Label>
                <Form.Control
                  type="text"
                  value={estimatedBudget}
                  onChange={(e) => setEstimatedBudget(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col>
            <Create_Events_dropdown/>
            </Col>


            <br></br>

           
          </Row>

          <br></br>
          <Button variant="primary" type="submit" style={{backgroundColor:'silver', margin:"0% 0% 0% 65%"}}>
            Create Event
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateEventsForm;