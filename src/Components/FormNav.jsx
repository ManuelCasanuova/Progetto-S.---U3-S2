import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router";

const FormNav = () => {
  const [place, setCittà] = useState("");

  return (
    <>
      <Form className="d-flex align-items-center mt-3">
        <Form.Group className="me-3" controlId="formCittà">
          <Form.Control
            type="text"
            placeholder="Ask me"
            value={place}
            onChange={(e) => setCittà(e.target.value)}
            className="rounded-4 "
            style={{ background: "none" }}
          />
        </Form.Group>

        {place.trim() && (
          <Link to={`/searched/${place}`} className="text-decoration-none">
            <Button variant="outline-light">
              <Search />
            </Button>
          </Link>
        )}
      </Form>
    </>
  );
};

export default FormNav;
