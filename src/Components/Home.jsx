import { Col, Container, Row } from "react-bootstrap";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <Hero />
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          <Col>
            <Section luogo="Roma" />
          </Col>
          <Col>
            <Section luogo="Milano" />
          </Col>
          <Col>
            <Section luogo="Miami" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
