import "./PortfolioNavigation.css";

function PortfolioNavigation() {
  return (
    <nav className="portfolio-navigation">
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  );
}

export default PortfolioNavigation;
