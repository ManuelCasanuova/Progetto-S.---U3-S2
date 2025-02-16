import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";

const SurfPage = () => {
  <>
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
  </>;
};

export default SurfPage;
