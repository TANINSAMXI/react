import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import {
  useAddTaskMutation,
  useUpdateTaskMutation,
  useGetTasksQuery,
} from "../features/tasks/tasksApi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TaskForm = ({ taskId }) => {
  const navigate = useNavigate();
  const { data: tasks } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const isEditing = !!taskId;
  const task = isEditing ? tasks?.find((t) => t.id === Number(taskId)) : null;

  const initialValues = {
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "new",
    priority: task?.priority || "medium",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Request"),
  });

  const handleSubmit = async (values) => {
    if (isEditing) {
      await updateTask({ id: taskId, ...values });
    } else {
      await addTask(values);
    }
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Name</BootstrapForm.Label>
            <Field
              name="title"
              as={BootstrapForm.Control}
              isInvalid={touched.title && errors.title}
            />
            <BootstrapForm.Control.Feedback type="invalid">
              {errors.title}
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Description</BootstrapForm.Label>
            <Field name="description" as={BootstrapForm.Control} />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Status</BootstrapForm.Label>
            <Field name="status" as="select" className="form-select">
              <option value="new">New</option>
              <option value="in process">In process</option>
              <option value="complete">Complete</option>
            </Field>
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3">
            <BootstrapForm.Label>Priority</BootstrapForm.Label>
            <Field name="priority" as="select" className="form-select">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
          </BootstrapForm.Group>

          <Button type="submit" variant="success">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

TaskForm.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TaskForm;
