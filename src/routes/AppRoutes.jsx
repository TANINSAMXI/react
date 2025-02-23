import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EditTask from "../pages/EditTask";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/new" element={<EditTask />} />
      <Route path="/task/:id/edit" element={<EditTask />} />
    </Routes>
  );
};

export default AppRoutes;
