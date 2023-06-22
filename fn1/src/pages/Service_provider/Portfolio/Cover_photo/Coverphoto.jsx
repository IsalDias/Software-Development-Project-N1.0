import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import profilePicture from './profilePicture.jpeg';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={4} lg={6} className="d-flex justify-content-center">
          <Image src={profilePicture} roundedCircle className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
