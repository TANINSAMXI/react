import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Guitar Shop
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/cart">
          Cart
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
