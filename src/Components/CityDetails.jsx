import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const CityDetails = () => {
  const { lat, lon } = useParams();

  const [cityDetails, setCityDetails] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;
    const fetchDetails = () => {
      setCityDetails(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=21ab05e2b62833a8e5cf2dcedc9a347f`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Errore nella chiamata API");
          }
          return resp.json();
        })
        .then((dettagliCitta) => {
          setCityDetails(dettagliCitta);
          console.log("SONO il console log", dettagliCitta);
        })
        .catch((e) => {
          console.error("Errore durante il recupero dei dati:", e);
        });
    };
    fetchDetails();
  }, [lat, lon]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}></Col>
      </Row>
    </Container>
  );
};
export default CityDetails;
