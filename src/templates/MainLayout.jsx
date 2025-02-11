import PropTypes from "prop-types";
import NavigationBar from "../components/NavigationBar.jsx";
import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-5">{children}</Container>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
