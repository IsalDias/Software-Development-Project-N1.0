import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Create_Events_dropdown.css';

function BasicDropdownExample() {
  const [eventTemplates, setEventTemplates] = useState([]);

  useEffect(() => {
    // Fetch event templates from the backend API
    axios
      .get('http://localhost:3001/evnttmplt/slctevnttmplt')
      .then(response => {
        setEventTemplates(response.data);
      })
      .catch(error => {
        console.error('Error fetching event templates:', error);
      });
  }, []);

  return (
    <Form>
      <Form.Group controlId="eventTemplateSelect">
        <Form.Label>Event Template</Form.Label>
        <Form.Select>
          <option>Select an event template</option>
          {eventTemplates.map(template => (
            <option key={template.id} value={template.id}>
              {template.eventTemplateName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default BasicDropdownExample;
