import { Form as BootstrapForm } from "react-bootstrap";
import PropTypes from "prop-types";

const EmailField = ({ email, error, handleChange }) => {
  return (
    <BootstrapForm.Group controlId="email">
      <BootstrapForm.Control
        type="email"
        placeholder="Enter your email(required)"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      {error && <small className="text-danger">{error}</small>}
    </BootstrapForm.Group>
  );
};

EmailField.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default EmailField;
