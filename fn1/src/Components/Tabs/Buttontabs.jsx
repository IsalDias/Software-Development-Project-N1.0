import React, { useState } from 'react';
import './buttontabs.css';
import Event_BasicTable from '../../Components/Customer_Components/Events/MyEvents/Events_myevents';

function Buttontabs() {
  const [activeTab, setActiveTab] = useState('link-1'); // Initialize the active tab state

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey); // Update the active tab when a tab is selected
  };

  return (
    <div className='first_section_buttontabs'>
      <div className="button-container">
        <button style={{backgroundColor:"transparent"}}
          className={`tab-button ${activeTab === 'link-1' ? 'active' : ''}`}
          onClick={() => handleTabSelect('link-1')}
        >
          My Events
        </button>
        <button style={{backgroundColor:"transparent"}}
          className={`tab-button ${activeTab === 'link-2' ? 'active' : ''}`}
          onClick={() => handleTabSelect('link-2')}
        >
          Past Events
        </button>
        <div className={`underline ${activeTab === 'link-1' ? 'left' : 'right'}`} />
      </div>

      {/* Render the relevant component based on the active tab */}
      {activeTab === 'link-1' ? <MyEventsComponent /> : null}
      {activeTab === 'link-2' ? <PastEventsComponent /> : null}
    </div>
  );
}

// Define the components for My Events and Past Events
function MyEventsComponent() {
  return (
    <div style={{ position: "relative", top: "4vh" }}>
      <Event_BasicTable />
    </div>
  );
}

function PastEventsComponent() {
  return <div>Past Events Component</div>;
}

export default Buttontabs;
