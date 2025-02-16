import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-5 text-white fw-bold">
            The page you were looking for does not exist, but luckily you found Michael!
          </h1>

          <Image src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQ4d3M4bzhoNXRmMWlxZHp0ZDZjbzFkdWE2M3dtbmVwbDU0djR3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zFa3vjySsETPa/giphy.gif" />
          <div>
            <Link to="/" className="btn btn-outline-light my-5">
              Back Home
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
