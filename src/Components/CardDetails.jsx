import { Card, Col, Container, Row } from "react-bootstrap";
import { ArrowDown, Wind } from "react-bootstrap-icons";

const CardDetails = ({ cityDetails }) => {
  console.log(cityDetails);
  const iconUrl = `https://openweathermap.org/img/wn/${cityDetails.weather[0].icon}@2x.png`;

  return (
    <Container fluid>
      <Row className="justify-content-center my-5">
        <h2 className="justify-content-center d-flex display-5 fw-bold text-white">
          {cityDetails.name} -{" "}
          {new Date(cityDetails.dt * 1000).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h2>
        <Card.Text className="justify-content-center d-flex display-5 fw-bold text-white">
          {cityDetails.weather[0].description}
        </Card.Text>
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
            alt={cityDetails.weather[0].main}
          />
        </Col>

        <Col xs={6} md={6} className="d-flex align-items-center ">
          <Card.Body>
            <Card.Text className="text-white">Media: {Math.floor(cityDetails.main.temp)}°</Card.Text>
            <Card.Text className="text-white">
              apparent temperature: {Math.floor(cityDetails.main.feels_like)}°
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Text className="text-white">Max: {Math.floor(cityDetails.main.temp_max)}°</Card.Text>
            <Card.Text className="text-white">Min: {Math.floor(cityDetails.main.temp)}°</Card.Text>
          </Card.Body>

          <Card.Body>
            <h4 className="text-white">Wind direction:</h4>
            <Card.Text className="justify-content-between d-flex display-5 fw-bold text-white my-3">
              <Wind />
              <ArrowDown className="detail-icon" style={{ transform: `rotate(${cityDetails.wind.deg}deg)` }} />
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetails;
