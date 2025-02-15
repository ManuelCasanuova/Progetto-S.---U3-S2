import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const HeroCard = ({ infoCitta }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${infoCitta.weather[0].icon}@2x.png`;

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col
          xs={6}
          md={6}
          style={{ width: "200px", height: "200px", overflow: "hidden" }}
          className=" d-flex align-items-center"
        >
          <Card.Img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            variant="top"
            src={iconUrl}
            alt={infoCitta.weather[0].main}
          />
        </Col>

        <Col xs={6} md={6} className="d-flex align-items-center ">
          <Card.Body>
            <Link to={`CityDetails/${infoCitta.coord.lat}/${infoCitta.coord.lon}`} style={{ textDecoration: "none" }}>
              <h2 className="display-5 fw-bold text-white">{infoCitta.name}</h2>
            </Link>
            <Card.Text className="text-white">{new Date(infoCitta.dt * 1000).toLocaleDateString("it-IT")}</Card.Text>
            <Card.Text className="text-white">Media: {Math.floor(infoCitta.main.temp)}°</Card.Text>
            <Card.Text className="text-white">
              {infoCitta.weather[0].description.charAt(0).toUpperCase() + infoCitta.weather[0].description.slice(1)}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCard;
