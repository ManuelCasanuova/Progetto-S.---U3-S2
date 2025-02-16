import { Card } from "react-bootstrap";
import { Link } from "react-router";

const CityCard = (props) => {
  const info = props.infoCitta;
  const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;

  return (
    <>
      <Link to={`CityDetails/${info.coord.lat}/${info.coord.lon}`} style={{ textDecoration: "none" }}>
        <Card className="rounded-4  my-5">
          <div className="image-container d-flex">
            <Card.Img variant="top" src={iconUrl} alt={info.weather[0].main} />
          </div>
          <Card.Body className="me-auto">
            <Card.Title className="display-5 fw-bold">{info.name}</Card.Title>

            <Card.Text>Media: {Math.floor(info.main.temp)}°C</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};
export default CityCard;
