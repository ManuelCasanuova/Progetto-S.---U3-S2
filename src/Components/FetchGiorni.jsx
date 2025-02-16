import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const FetchGiorni = ({ cityDetails }) => {
  const [previsioni, setPrevisioni] = useState([]);

  const coord = cityDetails.coord;

  console.log(cityDetails.coord);

  useEffect(() => {
    const fetchNextDays = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=21ab05e2b62833a8e5cf2dcedc9a347f`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Errore nella chiamata API");
          }
          return resp.json();
        })
        .then((prossimiGiorni) => {
            

          setPrevisioni(previsioneProssimiGiorni);
        })
        })
        .catch((e) => {
          console.error("Errore durante il recupero dei dati:", e);
        });
    };
    fetchNextDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityDetails]);

  console.log("Array", previsioni);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {previsioni.length > 0 ? (
          previsioni.map((giorno) => (
            <Col key={giorno.weather[0].id} xs={12} md={6} lg={4}>
              <Card className="rounded-4 mb-4">
                <div className="image-container d-flex">
                  <Card.Img
                    variant="top"
                    src={`https://openweathermap.org/img/wn/${giorno.weather[0].icon}@2x.png`}
                    alt={giorno.weather[0].main}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="display-6 fw-bold">
                    {new Date(giorno.dt * 1000).toLocaleDateString("it-IT")}
                  </Card.Title>
                  <Card.Text>Media: {Math.floor(giorno.main.temp)}°C</Card.Text>
                  <Card.Text>{giorno.weather[0].description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-white">Nessun dato disponibile</p>
        )}
      </Row>
    </Container>
  );
};

export default FetchGiorni;
