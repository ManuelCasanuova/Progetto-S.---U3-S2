import { Col, Container, Row } from "react-bootstrap";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      {location.pathname !== "/hero/:città" && <Hero />}
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Section luogo="Roma" />
            <Section luogo="Milano" />
            <Section luogo="Miami" />
            <Section luogo="Perugia" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
