import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";

import CardDetails from "./CardDetails";

const CityDetails = () => {
  const { lat, lon } = useParams();
  console.log(lat);
  console.log(lon);
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
          <CardDetails cityDetails={cityDetails} />
        </>
      ) : (
        <h4 className="my-2">Dettagli non trovati</h4>
      )}
    </>
  );
};
export default CityDetails;
