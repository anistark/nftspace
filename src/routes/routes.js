import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// views
const Home = lazy(() => import("../views/Home"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const Start = lazy(() => import("../views/Start"));
const NotFoundPage = lazy(() => import("../views/NotFoundPage"));
const NFTDetail = lazy(() => import("../views/NFTDetail"));


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/nft/:tokenId" element={<NFTDetail />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/start" element={<Start />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
