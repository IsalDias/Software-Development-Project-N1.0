import React, { useEffect, useState } from 'react';
import './create_event_template.css';
import { Col, Row, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const Create_event_template = () => {
  const [serviceNames, setServiceNames] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [alreadySelected, setAlreadySelected] = useState([]);

  useEffect(() => {
    // Fetch service names from the backend API
    fetch('http://localhost:3001/gtservicenames')
      .then((response) => response.json())
      .then((data) => setServiceNames(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Check if the selected service is already in the selectedServices array
    if (selectedServices.includes(searchValue)) {
      swal({
        title: 'Service already selected !',
        icon: 'warning',
        buttons: 'OK',
        className: 'custom-alert', // Add a custom CSS class for styling
      });
      return;
    }

    // Add the selected service to the selectedServices array
    setSelectedServices([...selectedServices, searchValue]);
    setSearchValue('');

    // Update the alreadySelected state
    setAlreadySelected([...alreadySelected, searchValue]);

    // Perform search based on the searchValue
    console.log('Perform search:', searchValue);
    // Add your search logic here
  };

  const handleDropService = (service) => {
    // Remove the service from selectedServices
    const updatedSelectedServices = selectedServices.filter(
      (selectedService) => selectedService !== service
    );
    setSelectedServices(updatedSelectedServices);

    // Remove the service from alreadySelected
    const updatedAlreadySelected = alreadySelected.filter(
      (selectedService) => selectedService !== service
    );
    setAlreadySelected(updatedAlreadySelected);
  };

  return (
    <div style={{ margin: '8% 8% 0% 3%', padding: '0% 8%' }}>
      <h1 className='create_event_template_heading'>Add Event Template</h1>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId='EventTemplate'>
              <Form.Label>Event Template Name:</Form.Label>
              <Form.Control type='text' className='custom-input' />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId='EventDescription'>
              <Form.Label>Template Description:</Form.Label>
              <Form.Control as='textarea' className='custom-input' />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group controlId='EventTmpltService'>
              <Form.Label>Select Services:</Form.Label>
              <Form.Control
                type='search'
                placeholder='Search'
                className='custom-input'
                aria-label='Search'
                value={searchValue}
                onChange={handleSearchChange}
                list='serviceNames'
              />
              <datalist id='serviceNames'>
                {serviceNames.map((name) => (
                  <option key={name.serviceName} value={name.serviceName} />
                ))}
              </datalist>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} className='align-self-end'>
            <Button
              style={{ marginTop: '48px' }}
              variant='outline-success'
              type='submit'
              onClick={handleSearchSubmit}
            >
              Select Service
            </Button>
          </Col>
        </Row>

        <br />

        <div className='selected-services'>
          <h4>Selected Services:</h4>
          <br />

          {selectedServices.map((service) => (
            <div key={service} className='service-item'>
              <Row>
                <Col xs={6} lg={6}>
                  <span>{service}</span>
                </Col>

                <Col xs={6} lg={6}>
                  <Button
                    variant='outline-danger'
                    onClick={() => handleDropService(service)}
                  >
                    Drop
                  </Button>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default Create_event_template;
