import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsList from "./modules/ProjectsList/ProjectsList.jsx";
import ProjectDetail from "./modules/ProjectsList/pages/ProjectDetail.jsx";
import PortfolioHeader from "./modules/PortfolioHeader/PortfolioHeader.jsx";
import PortfolioFooter from "./modules/PortfolioFooter/PortfolioFooter.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <PortfolioHeader />
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      </Routes>
      <PortfolioFooter />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
