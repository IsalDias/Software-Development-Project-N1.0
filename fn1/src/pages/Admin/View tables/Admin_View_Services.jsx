import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Admin_View_Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addservices');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleViewService = (serviceId) => {
    // Handle view service logic here
  };

  const handleRemoveService = (serviceId) => {
    // Handle remove service logic here
  };

  return (
    <div style={{ margin: '6% 4%' }}>
      <h1 className="create_event_template_heading">Manage Services</h1>
      <Button
        href="/services/add_services"
        style={{ backgroundColor: 'white', color: 'black', borderColor: 'transparent', marginLeft: '1100px' }}
      >
        Add Service
      </Button>
      <table style={{  marginTop: '3%', lineHeight: '50px' }}>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  
          {services.map((service) => (
            <tr key={service.id}>
                
              <td style={{ width: '50%' }}>{service.serviceName}</td>
              
              <td style={{ width: '40%' }}>

                <Button
                  style={{ backgroundColor: 'red', color: 'white', borderColor: 'transparent', width: '30%' }}
                  onClick={() => handleViewService(service.id)}
                >
                  View
                </Button>
              </td>
              <td style={{ width: '0%' }}>
                <Button
                  style={{ backgroundColor: '#303030', color: 'white', borderColor: 'transparent',width: '200%' }}
                  onClick={() => handleRemoveService(service.id)}
                >
                  Remove
                </Button>

              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin_View_Services;
