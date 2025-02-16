import { Col, Container, Row } from "react-bootstrap";
import Section from "./Section";
import SurfDisclamer from "./SurfDisclamer";

const SurfPage = () => {
  return (
    <>
      <Container fluid>
        <SurfDisclamer />
        <Row xs={1} sm={1} md={1} lg={1} className="g-4 justify-content-center">
          <Col>
            <Section luogo="Fuerteventura" />

            <Section luogo="Levanto" />

            <Section luogo="Lima" />
            <Section luogo="Uluwatu" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SurfPage;
