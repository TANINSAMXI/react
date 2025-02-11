import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const exit = () => {
    localStorage.clear();
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand as={Link} to="/">
            Router
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/blog"}>
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to={"/login"}>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to={"/profile"}>
            Profile
          </Nav.Link>
          <Nav.Link onClick={exit} as={Link} to={"/login"}>
            Exit
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
