import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2">
              <a href="https://www.facebook.com/?locale=it_IT">
                <Facebook className="me-2 footer-icon" />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram className="me-2 footer-icon" />
              </a>
              <a href="https://x.com/?lang=it&mx=2">
                <TwitterX className="me-2 footer-icon" />
              </a>
              <a href="https://www.youtube.com/">
                <Youtube className="me-2 footer-icon" />
              </a>
            </Col>
          </Row>

          <Row xs={1} sm={2} md={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col className="col footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="col footer-links">
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2">
              <Button variant="outline-secondary" className="btn btn-sm footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2 mt-2 copyright">© 2025 Dunder Miffflin, Inc. Meteo Company</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
