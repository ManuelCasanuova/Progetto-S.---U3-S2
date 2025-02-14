import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { Arrow90degDown } from "react-bootstrap-icons";

const CityDetails = () => {
  const { lat, lon } = useParams();
  console.log(lat);
  const [cityDetails, setCityDetails] = useState(null);
  const [caricamento, setCaricamento] = useState(false);

  useEffect(() => {
    if (!lat || !lon) return;
    const fetchDetails = () => {
      setCaricamento(true);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=21ab05e2b62833a8e5cf2dcedc9a347f`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Errore nella chiamata API");
          }
          return resp.json();
        })
        .then((dettagliClimaCitta) => {
          setCaricamento(false);
          setCityDetails(dettagliClimaCitta);
          console.log("SONO il console log", dettagliClimaCitta);
        })
        .catch((e) => {
          console.error("Errore durante il recupero dei dati:", e);
          setCaricamento(false);
        });
    };
    fetchDetails();
  }, [lat, lon]);
  console.log(cityDetails);
  return (
    <>
      {caricamento ? (
        <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : cityDetails ? (
        <>
          <Container>
            <h2>
              Dettagli di {cityDetails.name} - {new Date(cityDetails.dt * 1000).toLocaleDateString("it-IT")}
            </h2>

            <Row className="g-0">
              <Col xs={12} md={3} className="p-4 d-flex align-items-center">
                <h2>{Math.floor(cityDetails.main.temp)}°</h2>
                <Card.Img variant="top" />
              </Col>
              <Col xs={12} md={9} className="d-flex align-items-center">
                <Card.Body>
                  <Card.Text>
                    <Arrow90degDown
                      className="detail-icon"
                      style={{ transform: `rotate(${cityDetails.wind.deg}deg)` }}
                    />
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <h4 className="my-2">Dettagli non trovati</h4>
      )}
    </>
  );
};
export default CityDetails;
