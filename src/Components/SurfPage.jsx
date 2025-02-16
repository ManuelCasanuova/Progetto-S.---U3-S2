import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";

const SurfPage = () => {
  return (
    <>
      <Container fluid>
        <Row xs={1} sm={1} md={1} lg={1} className="g-4 justify-content-center">
          <Col>
            <Section luogo="Fuerteventura" />

            <Section luogo="Levanto" />

            <Section luogo="Miami" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SurfPage;
