import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  const [serviceNames, setServiceNames] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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
    // Perform search based on the searchValue
    console.log('Perform search:', searchValue);
    // Add your search logic here
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchChange}
              list="serviceNames"
            />
            <datalist id="serviceNames">
              {serviceNames.map((name) => (
                <option key={name.serviceName} value={name.serviceName} />
                
              ))}
            </datalist>
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
