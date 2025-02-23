import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Task Manager</h1>
      <AppRoutes />
    </Container>
  );
};

export default App;
