import { Card, Col, Container, Row } from "react-bootstrap";

const HeroCard = ({ infoCitta }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${infoCitta.weather[0].icon}@2x.png`;

  return (
    <Container fluid>
      <Row className="justify-content-end ">
        <Col xs={3} md={3} className=" p-4 d-flex align-items-center">
          <Card.Img variant="top" src={iconUrl} alt={infoCitta.weather[0].main} />
        </Col>

        <Col xs={6} md={6} className="d-flex align-items-center ">
          <Card.Body>
            <h2 className="display-5 fw-bold text-white">{infoCitta.name}</h2>
            <Card.Text className="text-white">{new Date(infoCitta.dt * 1000).toLocaleDateString("it-IT")}</Card.Text>
            <Card.Text className="text-white">Media: {Math.floor(infoCitta.main.temp)}°</Card.Text>
            <Card.Text className="text-white">{infoCitta.weather[0].description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCard;
