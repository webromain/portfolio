import "./PortfolioHeader.css";
import PortfolioNavigation from "../PortfolioNavigation/PortfolioNavigation.jsx";

function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <PortfolioNavigation />
      <h1 className="portfolio-title">Hey, I'm Romain POISSON</h1>
      <h2>Développeur Full Stack Junior</h2>
      <h3>En études à l’EPSI – l’Ecole d’Ingénierie Informatique</h3>
      <p>
        Je suis une personne sérieuse et persévérante, très motivée pour
        atteindre mes objectifs professionnels et devenir à terme Développeur
        Full Stack.
      </p>
    </header>
  );
}

export default PortfolioHeader;
