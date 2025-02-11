import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import MainLayout from "../templates/MainLayout.jsx";
import PostDetail from "../pages/PostDetail.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRouter = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/blog/:id"} element={<PostDetail />} />
            <Route path={"/login"} element={<Login />} />
            <Route
              path={"/profile"}
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default AppRouter;
