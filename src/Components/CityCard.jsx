import { Card } from "react-bootstrap";
import { Link } from "react-router";

const CityCard = (props) => {
  const info = props.infoCitta;
  const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;

  return (
    <>
      <Card className="rounded">
        <Card.Img variant="top" src={iconUrl} alt={info.weather[0].main} />
        <Card.Body>
          <Card.Title className="display-5 fw-bold">{info.name}</Card.Title>
          <Card.Text>{new Date(info.dt * 1000).toLocaleDateString("it-IT")}</Card.Text>
          <Card.Text>Media: {Math.floor(info.main.temp)}°C</Card.Text>
          <Link className="btn btn-dark w-100" to={`CityDetails/${info.coord.lat}/${info.coord.lon}`}>
            Dettagli
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
export default CityCard;
