import { useState } from "react";
import { Form } from "react-bootstrap";

import { Link } from "react-router";

const FormNav = () => {
  const [place, setCittà] = useState("");

  return (
    <>
      <Form className="d-flex align-items-center">
        <Form.Group className="me-3" controlId="formCittà">
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={place}
            onChange={(e) => setCittà(e.target.value)}
          />
        </Form.Group>

        {place.trim() && (
          <Link to={`/hero/${place}`} className="btn btn-primary">
            Cerca
          </Link>
        )}
      </Form>
    </>
  );
};

export default FormNav;
