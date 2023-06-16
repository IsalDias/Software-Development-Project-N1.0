import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import  './events_myevents.css'

const EventsTable = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/events');
      setEvents(response.data);
    } catch (error) {
      console.log('Error fetching events:', error);
    }
  };

  const handleView = (eventId) => {
    // Handle view button click event
    console.log('View event:', eventId);
    // Add your logic here to navigate to the event details page or perform any other action
  };

  return (
    <div  >
      <h1 className="EventsTable_heading">Events Table</h1>
      <div className="EventsTable_table_full" style={{ overflowX: 'auto' }}>
        <Table striped bordered hover >
          <thead>
            <tr style={{color:"white"}}>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} >
                <td style={{color:"white"}}>{event.eventName}</td>
                <td style={{color:"white"}}>{event.eventDate}</td>
                <td>
                  <Button variant="primary" onClick={() => handleView(event.id)} style={{backgroundColor:'#00ad65', borderColor:"#00ad65"}}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EventsTable;
