import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// views
const Home = lazy(() => import("../views/Home"));
const Start = lazy(() => import("../views/Start"));
const NotFoundPage = lazy(() => import("../views/NotFoundPage"));

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/start" element={<Start />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
