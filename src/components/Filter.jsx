import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/ tasksSlice.jsx";
import { Button } from "react-bootstrap";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <div className="mb-3">
      <Button
        variant={filter === "all" ? "primary" : "outline-primary"}
        onClick={() => dispatch(setFilter("all"))}
        className="me-2"
      >
        All
      </Button>
      <Button
        variant={filter === "new" ? "primary" : "outline-primary"}
        onClick={() => dispatch(setFilter("new"))}
        className="me-2"
      >
        New
      </Button>
      <Button
        variant={filter === "in process" ? "primary" : "outline-primary"}
        onClick={() => dispatch(setFilter("in process"))}
        className="me-2"
      >
        In process
      </Button>
      <Button
        variant={filter === "complete" ? "primary" : "outline-primary"}
        onClick={() => dispatch(setFilter("complete"))}
      >
        Complete
      </Button>
    </div>
  );
};

export default Filter;
