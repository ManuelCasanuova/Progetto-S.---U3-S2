import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import FormNav from "./FormNav";

const CustomNavBar = () => {
  return (
    <Navbar className="sticky-top" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image src="../src/assets/LogoSurf.webp" width="200" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link text-white" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/SurfPage">
              Search for the waves
            </NavLink>
          </Nav>
          <Nav className="ms-auto">{<FormNav />}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
