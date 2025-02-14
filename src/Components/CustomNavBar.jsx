import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

const CustomNavBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image src="../src/assets/Logo.jpeg" width="200" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
          <Nav className="ms-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
