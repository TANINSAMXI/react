import { Form as BootstrapForm } from "react-bootstrap";
import PropTypes from "prop-types";

const NameField = ({ name, error, handleChange }) => {
  return (
    <BootstrapForm.Group controlId="name">
      <BootstrapForm.Control
        type="text"
        placeholder="Enter your name(required)"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      {error && <small className="text-danger">{error}</small>}
    </BootstrapForm.Group>
  );
};

NameField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default NameField;
