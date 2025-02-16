import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const FetchGiorni = ({ cityDetails }) => {
  const [previsioni, setPrevisioni] = useState([]);

  const coord = cityDetails.coord;

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
          const previsioneProssimiGiorni = prossimiGiorni.list
            .filter((item, index) => index % 8 === 0)
            .map((item) => ({
              date: new Date(item.dt * 1000).toLocaleDateString("it-IT", {
                weekday: "long",
                day: "numeric",
                month: "long",
              }),
              temp: Math.floor(item.main.temp),
              description: item.weather[0].description,
              icon: item.weather[0].icon,
            }));

          setPrevisioni(previsioneProssimiGiorni.slice(0, 5));
        })
        .catch((e) => {
          console.error("Errore durante il recupero dei dati:", e);
        });
    };
    fetchNextDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityDetails]);

  return (
    <Row className="justify-content-center">
      {previsioni.length > 0 ? (
        previsioni.map((giorno, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="rounded-4 mb-4">
              <div className="image-container d-flex">
                <Card.Img
                  variant="top"
                  src={`https://openweathermap.org/img/wn/${giorno.icon}@2x.png`}
                  alt={giorno.description}
                />
              </div>
              <Card.Body>
                <Card.Title className="display-6 fw-bold">{giorno.date}</Card.Title>
                <Card.Text>Media: {giorno.temp}°C</Card.Text>
                <Card.Text>{giorno.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-center text-white">Nessun dato disponibile</p>
      )}
    </Row>
  );
};

export default FetchGiorni;
