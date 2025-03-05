// Header.jsx
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Badge, InputGroup, Input } from "rsuite";
import { BsCart, BsSearch } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/">
        🛍️ MyShop
      </Navbar.Brand>
      <Nav pullRight>
        <Nav.Item as={Link} to="/">
          Каталог
        </Nav.Item>
        <Nav.Item as={Link} to="/cart">
          <BsCart size={20} /> Кошик{" "}
          {cartItemsCount > 0 && <Badge content={cartItemsCount} />}
        </Nav.Item>
        <InputGroup inside style={{ width: 300, margin: 10 }}>
          <Input
            placeholder="Пошук товарів..."
            value={searchQuery}
            onChange={(value) => handleSearchChange(value)}
            onPressEnter={handleSearchSubmit} // Handle search on Enter key press
          />
          <InputGroup.Button onClick={handleSearchSubmit}>
            <BsSearch />
          </InputGroup.Button>
        </InputGroup>
      </Nav>
    </Navbar>
  );
};

export default Header;
