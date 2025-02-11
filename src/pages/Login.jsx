import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const setToken = () => {
    localStorage.setItem("token", "test-token");
    navigate("/profile");
  };
  return (
    <>
      <h1>Login Page</h1>
      <p>Please login to have access to safe page.</p>
      <Button onClick={setToken}>Login</Button>
    </>
  );
};

export default Login;
