import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";

const SurfPage = () => {
  <>
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
        <Col>
          <Section luogo="Fuerteventura" />
        </Col>
        <Col>
          <Section luogo="LosAngeles" />
        </Col>
        <Col>
          <Section luogo="Miami" />
        </Col>
      </Row>
    </Container>
  </>;
};

export default SurfPage;
