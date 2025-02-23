import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "../features/tasks/tasksApi";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  const navigate = useNavigate();
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          Status: {task.status}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Priority: {task.priority}
        </Card.Subtitle>
        <Button
          variant="warning"
          onClick={() => navigate(`/task/${task.id}/edit`)}
          className="me-2"
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
