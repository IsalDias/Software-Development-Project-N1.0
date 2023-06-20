import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Customer_createEvents = () => {
  const [page, setPage] = useState(0);
  const formTitle = ["Personal Information", "Signup Information"];

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className='form' style={{ marginTop: '5%' }}>
      <div className='Multi-form-container'>
        <div className='Multi-form-body'>
          <h2>{formTitle[page]}</h2>
          {/* Render your form components based on the current page */}
        </div>
        <div className='Multi-form-footer'>
          <Button onClick={handlePrevClick} disabled={page === 0}>
            Prev
          </Button>
          <Button onClick={handleNextClick} disabled={page === formTitle.length - 1}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Customer_createEvents;
