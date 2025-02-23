import { useGetTasksQuery } from "../features/tasks/tasksApi";
import TaskItem from "./TaskItem";
import { Spinner, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const TaskList = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();
  const filter = useSelector((state) => state.tasks.filter);

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Loading error</Alert>;

  const filteredTasks = tasks?.filter((task) =>
    filter === "all" ? true : task.status === filter,
  );

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <Alert variant="info">No Tasks</Alert>
      )}
    </div>
  );
};

export default TaskList;
