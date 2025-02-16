import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowDown, Wind } from "react-bootstrap-icons";
import FetchGiorni from "./FetchGiorni";

const CardDetails = ({ cityDetails }) => {
  console.log(cityDetails);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center my-5">
          <Card.Text className="justify-content-center d-flex  fw-bold text-white">
            {new Date(cityDetails.dt * 1000).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Card.Text>
          <h2 className="justify-content-center d-flex display-5 fw-bold text-white">{cityDetails.name} </h2>

          <Card.Text className="justify-content-center d-flex display-5 fw-bold text-white">
            {Math.floor(cityDetails.main.temp)}°
          </Card.Text>

          <Col xs={3} md={3} className="justify-content-center">
            <Card.Body>
              <Card.Text className="text-white">
                Apparent temperature: {Math.floor(cityDetails.main.feels_like)}°
              </Card.Text>
              <Card.Text className="text-white">Max: {Math.floor(cityDetails.main.temp_max)}°</Card.Text>
              <Card.Text className="text-white">Min: {Math.floor(cityDetails.main.temp)}°</Card.Text>
              <Card.Text className=" text-white">{cityDetails.weather[0].description}</Card.Text>
              <Card.Text className="text-white">
                <Wind /> Wind direction:{" "}
                <ArrowDown className="detail-icon" style={{ transform: `rotate(${cityDetails.wind.deg}deg)` }} />
              </Card.Text>
              <Button onClick={() => setShowMore(!showMore)} className="mt-3" variant="primary">
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <Container fluid>{showMore && <FetchGiorni cityDetails={cityDetails} />}</Container>
    </>
  );
};

export default CardDetails;
