import { Col, Container, Row } from "react-bootstrap";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <Hero />
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4 justify-content-center">
          <Col>
            <Section luogo="London" />
          </Col>
          <Col>
            <Section luogo="New+York" />
          </Col>
          <Col>
            <Section luogo="Miami" />
          </Col>
          <Col>
            <Section luogo="Sidney" />
          </Col>
          <Col>
            <Section luogo="Madrid" />
          </Col>
          <Col>
            <Section luogo="Cape+Town" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
