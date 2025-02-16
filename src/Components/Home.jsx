import { Container } from "react-bootstrap";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      {location.pathname !== "/hero/:città" && <Hero />}
      <Container fluid>
        <Section luogo="Roma" />
        <Section luogo="Milano" />
        <Section luogo="Miami" />
      </Container>
    </>
  );
};
export default Home;
