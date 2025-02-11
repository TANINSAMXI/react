import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

  if (isChecking) {
    return <div>Завантаження...</div>;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
