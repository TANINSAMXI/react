import { Form as BootstrapForm } from "react-bootstrap";
import PropTypes from "prop-types";

const PhoneField = ({ phone, error, handleChange }) => {
  return (
    <BootstrapForm.Group controlId="phone">
      <BootstrapForm.Control
        type="text"
        placeholder="Enter your 12 digit phone number(required)"
        name="phone"
        value={phone}
        onChange={handleChange}
        required
      />
      {error && <small className="text-danger">{error}</small>}
    </BootstrapForm.Group>
  );
};

PhoneField.propTypes = {
  phone: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default PhoneField;
