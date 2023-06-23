import React, { useEffect, useState } from "react";
import "./create_event_template.css";
import { Col, Row, Form, Button, Dropdown } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const Create_event_template = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [selectedService, setSelectedService] = useState(""); // Changed variable name
  const [selectedServices, setSelectedServices] = useState([]);
  const [alreadySelected, setAlreadySelected] = useState([]);
  const [filteredServiceNames, setFilteredServiceNames] = useState([]);

  useEffect(() => {
    // Fetch service names from the backend API
    axios.get("http://localhost:3001/gtservicenames")
      .then((response) => {
        setFilteredServiceNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleServiceSelect = (service) => { // Changed function name
    setSelectedService(service);
  };

  const handleServiceSubmit = () => { // Changed function name
    if (!selectedService) {
      swal({
        title: "Please select a service!",
        icon: "warning",
        buttons: "OK",
        className: "custom-alert",
      });
      return;
    }

    if (selectedServices.includes(selectedService)) {
      swal({
        title: "Service already selected!",
        icon: "warning",
        buttons: "OK",
        className: "custom-alert",
      });
      return;
    }

    setSelectedServices([...selectedServices, selectedService]);
    setAlreadySelected([...alreadySelected, selectedService]);
    setSelectedService("");
  };

  const handleDropService = (service) => {
    const updatedSelectedServices = selectedServices.filter(
      (selectedService) => selectedService !== service
    );
    setSelectedServices(updatedSelectedServices);

    const updatedAlreadySelected = alreadySelected.filter(
      (selectedService) => selectedService !== service
    );
    setAlreadySelected(updatedAlreadySelected);
  };

  return (
    <div style={{ margin: "8% 8% 0% 3%", padding: "0% 8%" }}>
      <h1 className="create_event_template_heading">Add Event Template</h1>

      <Form>
        <Row>
          <Col>
            <Form.Group controlId="EventTemplate">
              <Form.Label>Event Template Name:</Form.Label>
              <Form.Control
                type="text"
                className="custom-input"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="EventDescription">
              <Form.Label>Template Description:</Form.Label>
              <Form.Control
                as="textarea"
                className="custom-input"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div>
          <Row>
            <Col xs={12} lg={6}>
              <Form.Group controlId="EventTmpltService">
                <Form.Label>Select Services:</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    className="custom-dropdown-toggle"
                  >
                    {selectedService || "Select a service"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu">
                    {filteredServiceNames.map((name) => (
                      <Dropdown.Item
                        key={name.serviceName}
                        onClick={() => handleServiceSelect(name.serviceName)}
                      >
                        {name.serviceName}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Col>
            <Col xs={12} lg={6} className="align-self-end">
              <Button
                style={{ marginTop: "48px" }}
                variant="outline-success"
                type="button"
                onClick={handleServiceSubmit}
              >
                Select Service
              </Button>
            </Col>
          </Row>

          <br />

          <div className="selected-services">
            <h4>Selected Services:</h4>
            <br />

            {selectedServices.map((service) => (
              <div key={service} className="service-item">
                <Row>
                  <Col xs={6} lg={6}>
                    <span>{service}</span>
                  </Col>

                  <Col xs={6} lg={6}>
                    <Button
                      variant="outline-danger"
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
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Create_event_template;
