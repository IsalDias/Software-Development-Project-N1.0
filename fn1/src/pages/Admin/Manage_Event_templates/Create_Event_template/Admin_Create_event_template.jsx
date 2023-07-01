import React, { useEffect, useState } from "react";
import "./create_event_template.css";
import { Col, Row, Form, Button, Dropdown } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const Create_event_template = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [alreadySelected, setAlreadySelected] = useState([]);
  const [filteredServiceNames, setFilteredServiceNames] = useState([]);
  const [eventTemplateId, setEventTemplateId] = useState("");
  const [value3, setValue3] = useState(1);

  useEffect(() => {
    // Fetch service names from the backend API
    axios
      .get("http://localhost:3001/secervisdetails")
      .then((response) => {
        const serviceNames = response.data;
        setFilteredServiceNames(serviceNames);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch the last event template ID from the backend API
  //   axios
  //     .get("http://localhost:3001/evnttmplt/lastId")
  //     .then((response) => {
  //       const lastId = parseInt(response.data.lastId);
  //       setEventTemplateId(lastId + 1);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleServiceSubmit = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if event template name is filled
    if (!value1) {
      swal({
        title: "Please enter an event template name!",
        icon: "warning",
        buttons: "OK",
        className: "custom-alert",
      });
      return;
    }

    try {
      // Check if event template name already exists in the database
      const response = await axios.get(
        "http://localhost:3001/evnttmplt/gtinfoevnttmplt"
      );

      const existingTemplates = response.data;

      if (
        existingTemplates.find(
          (template) => template.eventTemplateName === value1
        )
      ) {
        swal({
          title: "Event template name already exists!",
          icon: "warning",
          buttons: "OK",
          className: "custom-alert",
        });
        return;
      }

      const eventData = {
        eventTemplateName: value1,
        eventTemplateDescrpt: value2,
      };

      // Create the event template
      axios
        .post("http://localhost:3001/evnttmplt/snd_data", eventData)
        .then((response) => {

          axios
          .get("http://localhost:3001/evnttmplt/lastId")
          .then((response) => {
            const lastId = parseInt(response.data.eventTemplateid);
            const lastid = lastId + 1;
            setValue3(lastid);
            console.log(value3);
          })
          .catch((error) => {
            console.log(error);
          });
        


          // Get the newly created event template ID
      
          // Create the records in the serviceeventtemplates table
          const serviceEventTemplateData = selectedServices.map((service) => ({
            eventTemplateid: value3,
            serviceId: service,
          }));
 console.log(selectedServices);
 console.log(serviceEventTemplateData);
          axios
            .post(
              "http://localhost:3001/pstevnttmpltservices/evnttmpltservices",
              serviceEventTemplateData
            )
            .then((response) => {
              handleReset();
              // Handle successful submission
              // For example, show a success message
              swal({
                title: "Event template created successfully!",
                text: "successfully created",
                icon: "success",
                buttons: "OK",
                className: "custom-alert",
              });
            })
            .catch((error) => {
              // Handle error
              // For example, show an error message
              swal({
                title: "Error creating event template!",
                text:
                  "An error occurred while creating the event template. Please try again.",
                icon: "error",
                buttons: "OK",
                className: "custom-alert",
              });
            });
        })
        .catch((error) => {
          // Handle error
          // For example, show an error message
          swal({
            title: "Error creating eventrghrrjryj template!",
            text:
              "An error occurred while creating the event template. Please try again.",
            icon: "error",
            buttons: "OK",
            className: "custom-alert",
          });
        });
    } catch (error) {
      // Handle error
      // For example, show an error message
      swal({
        title: "Error checking event template name!",
        text:
          "An error occurred while checking the event template name. Please try again.",
        icon: "error",
        buttons: "OK",
        className: "custom-alert",
      });
    }
  }

  const handleReset = () => {
    setValue1("");
    setValue2("");
    setSelectedService("");
    setSelectedServices([]);
    setAlreadySelected([]);
    setEventTemplateId("");
    setValue3(1);
  };

  return (
    <div style={{ margin: "8% 8% 0% 3%", padding: "0% 8%" }}>
      <h1 className="create_event_template_heading">Add Event Template</h1>

      <Form onSubmit={handleSubmit}>
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
                    {filteredServiceNames.map((service) => (
                      <Dropdown.Item
                        key={service.serviceId}
                        //onChange={setSelectedServicesname(service.serviceName)}
                        onClick={() =>
                          handleServiceSelect(service.serviceId)
                        
                        }
                      >
                         {service.serviceName} 
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

  {selectedServices.map((serviceId) => {
    const service = filteredServiceNames.find(
      (service) => service.serviceId === serviceId
    );

    if (!service) {
      return null;
    }

    return (
      <div key={service.serviceId} className="service-item">
        <Row>
          <Col xs={6} lg={6}>
            <span>{service.serviceName}</span>
          </Col>

          <Col xs={6} lg={6}>
            <Button
              variant="outline-danger"
              onClick={() => handleDropService(service.serviceId)}
            >
              Drop
            </Button>
          </Col>
        </Row>
        <hr />
      </div>
    );
  })}
</div>

        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Create_event_template;