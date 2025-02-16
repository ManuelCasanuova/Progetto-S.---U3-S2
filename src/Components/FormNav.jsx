import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

const FormNav = () => {
  const [città, setCittà] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/hero/${città}`);

    console.log("Parametro in NavForm", città);
  };

  console.log(città);
  return (
    <>
      <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <Form.Group className="me-3" controlId="formCittà">
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            onChange={(e) => setCittà(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cerca
        </Button>
      </Form>
    </>
  );
};

export default FormNav;
