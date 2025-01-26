import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "A valid email is required";
    }

    const phoneRegex = /^\d{12}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 12 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <Container className="mb-auto">
      <h2 className="mb-4">Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12} className="mb-4">
            <NameField
              name={formData.name}
              error={errors.name}
              handleChange={handleInputChange}
            />
          </Col>
          <Col md={12} className="mb-4">
            <EmailField
              email={formData.email}
              error={errors.email}
              handleChange={handleInputChange}
            />
          </Col>
          <Col md={12} className="mb-4">
            <PhoneField
              phone={formData.phone}
              error={errors.phone}
              handleChange={handleInputChange}
            />
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MyForm;
