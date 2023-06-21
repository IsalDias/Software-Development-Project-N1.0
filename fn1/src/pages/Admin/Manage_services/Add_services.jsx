import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import swal from 'sweetalert';
import './add_services.css';

const Add_services = () => {
  const [existingServiceNames, setExistingServiceNames] = useState([]);

  useEffect(() => {
    // Fetch existing service names from the backend
    axios.get('http://localhost:3001/addservices')
      .then(response => {
        const names = response.data.map(service => service.serviceName);
        setExistingServiceNames(names);
      })
      .catch(error => {
        console.error('Error fetching existing service names:', error);
      });
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    if (!values.serviceDescription) {
      alert('Service Description is required.');
      return;
    }

    const { serviceName } = values;
    if (existingServiceNames.includes(serviceName)) {
      swal('Error', 'Service Name already exists. Please enter a different Service Name.', 'error');
      return;
    }

    try {
      await axios.post('http://localhost:3001/addservices', values);
      swal('success', 'Data saved successfully!', 'success');
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data.');
    }
  };

  return (
    <div>
      <h4 className="Events_CreateEvents_heading1" style={{ margin: '8% 10% 4%' }}>Add Services</h4>
      <Formik
        initialValues={{ serviceName: '', serviceDescription: '' }}
        onSubmit={handleSubmit}
      >
        <Form style={{ margin: '0% 10%' }}>
          <Row>
            <Col xs={12} lg={12}>
              <label> Service Name: </label>
            </Col>
            <Col xs={12} lg={12}>
              <Field
                name="serviceName"
                type="text"
                placeholder="Service Name"
                className="custom-input2"
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={12} lg={12}>
              <label> Service Description: </label>
            </Col>
            <Col xs={12} lg={12}>
              <Field
                name="serviceDescription"
                type="text"
                className="custom-input2"
              />
            </Col>
          </Row>
          <br />
          <Button
            type="submit"
            style={{ backgroundColor: "#303030", borderColor: "#313131"}}
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Add_services;
