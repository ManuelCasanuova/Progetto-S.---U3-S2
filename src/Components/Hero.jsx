import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center mt-4">
          <Col id="hero" xs={10} md={6} className="text-center">
            <h1>Benvenuto in Dunder Miffflin Meteo Company</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
