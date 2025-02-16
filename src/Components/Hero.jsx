import { useEffect, useState } from "react";

import { Badge, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

import HeroCard from "./HeroCard";

const Hero = () => {
  const [caricamento, setCaricamento] = useState(false);
  const [city, setCity] = useState(null);
  const [infoCitta, setInfoCitta] = useState(null);
  const { place } = useParams();
  const cittàDefault = "Rome";

  console.log("Sono il parametro ", place);

  const fetchCittà = (nomeCittà) => {
    console.log("Sono il parametro ", place);

    setCaricamento(true);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${nomeCittà}&appid=21ab05e2b62833a8e5cf2dcedc9a347f`)
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
    console.log("Sono il parametro ", { place });
    const nomeCittà = place || cittàDefault;
    fetchCittà(nomeCittà);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

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
          console.log("SONO il console log", dettagliCitta);
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
      {caricamento ? (
        <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : infoCitta ? (
        <HeroCard infoCitta={infoCitta} />
      ) : (
        <Badge bg="light" text="dark">
          Città non trovata
        </Badge>
      )}
    </>
  );
};

export default Hero;
