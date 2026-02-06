import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsList from "./modules/ProjectsList/ProjectsList.jsx";
import ProjectDetail from "./modules/ProjectsList/pages/ProjectDetail.jsx";
import PortfolioHeader from "./modules/PortfolioHeader/PortfolioHeader.jsx";
import PortfolioNavigation from "./modules/PortfolioNavigation/PortfolioNavigation.jsx";
import PortfolioFooter from "./modules/PortfolioFooter/PortfolioFooter.jsx";
import "./index.css";

function Layout({ children }) {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/projects/");

  return (
    <>
      {!isProjectDetail && <PortfolioHeader />}
      {isProjectDetail && <PortfolioNavigation />}
      {children}
      {!isProjectDetail && <PortfolioFooter />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ProjectsList />
            </Layout>
          }
        />
        <Route
          path="/projects/:projectSlug"
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
