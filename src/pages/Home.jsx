import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home page</h1>
      <Button onClick={() => navigate("/blog")}>To Blog</Button>
    </>
  );
};

export default Home;
