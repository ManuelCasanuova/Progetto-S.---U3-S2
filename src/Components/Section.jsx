import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";

const Section = () => {
  const [caricamento, setCaricamento] = useState(false);
  const [city, setCity] = useState(null);
  const [infoCitta, setInfoCitta] = useState(null);

  const fetchCittà = () => {
    setCaricamento(true);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=roma&appid=21ab05e2b62833a8e5cf2dcedc9a347f`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Errore nella chiamata API");
        }
        return resp.json();
      })
      .then((cittaCercata) => {
        setCaricamento(false);
        if (cittaCercata.length > 0) {
          setCity(cittaCercata[0]);
          console.log(cittaCercata[0]);
        }
      })
      .catch((e) => {
        console.error("Errore durante il recupero dei dati:", e);
        setCaricamento(false);
      });
  };

  useEffect(() => {
    fetchCittà();
  }, []);

  useEffect(() => {
    if (!city) return;
    const fetchLoneLat = () => {
      setCaricamento(true);
      console.log(city);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=21ab05e2b62833a8e5cf2dcedc9a347f`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Errore nella chiamata API");
          }
          return resp.json();
        })
        .then((dettagliCitta) => {
          setCaricamento(false);
          setInfoCitta(dettagliCitta);
          console.log(dettagliCitta);
        })
        .catch((e) => {
          console.error("Errore durante il recupero dei dati:", e);
          setCaricamento(false);
        });
    };
    fetchLoneLat();
  }, [city]);

  return (
    <>
      {
        <h4 className="my-2">{infoCitta.name}</h4> /*
      {setCaricamento && (
        <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Row xs={1} sm={2} md={6} className=" g-4">
        {this.state.remoteFilms.slice(0, 6).map((film) => {
          return <SingleFilm key={film.imdbID} film={film} />;
        })}
      </Row> */
      }
    </>
  );
};

export default Section;
