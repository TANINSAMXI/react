import TaskList from "../components/TaskList";
import Filter from "../components/Filter";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Filter />
      <Button
        variant="success"
        className="mb-3"
        onClick={() => navigate("/task/new")}
      >
        Add Task
      </Button>
      <TaskList />
    </div>
  );
};

export default Home;
