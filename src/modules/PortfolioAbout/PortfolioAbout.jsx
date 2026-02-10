import "./PortfolioAbout.css";

function PortfolioAbout() {
  return (
    <section id="about" className="about-section">
      {/* En-tête */}
      <div className="about-header">
        <h2 className="section-title">:~$ À Propos</h2>
        {/* <p className="about-subtitle">
          Développeur Full Stack en alternance avec une passion pour
          l'innovation
        </p> */}
      </div>

      {/* Contenu principal */}
      <div className="about-content">
        {/* Section Formation */}
        <div className="about-card">
          <h2>Formation</h2>
          <div className="about-text">
            <p>
              Actuellement en <strong>3e année de Bachelor à l'EPSI</strong>, je
              me spécialise dans :
            </p>
            <ul className="skills-list">
              <li>Développement Full Stack</li>
              <li>Data & Intelligence Artificielle</li>
            </ul>
            <p>
              Ma formation m'a permis de développer une expertise solide dans
              les technologies modernes et les meilleures pratiques du
              développement logiciel.
            </p>
          </div>
        </div>

        {/* Section Expérience */}
        <div className="about-card">
          <h2>Expérience Professionnelle</h2>
          <div className="about-text">
            <h3>Développeur Full Stack en Alternance</h3>
            <p className="job-details">
              <strong>PORT Designs</strong> — Le Pecq
              <br />
              <em>Jusqu'à fin août</em>
            </p>
            <p>
              Je travaille activement sur la{" "}
              <strong>
                direction et le développement intégral du nouveau site
              </strong>{" "}
              de l'entreprise, dans le cadre d'une{" "}
              <strong>refonte complète</strong>. Cette alternance m'offre une
              expérience précieuse en gestion de projets web modernes et en
              collaboration avec des équipes professionnelles.
            </p>
          </div>
        </div>

        {/* Section Réflexion */}
        <div className="about-card">
          <h2>Orientation Future</h2>
          <div className="about-text">
            <p>
              Cette expérience enrichissante m'amène à{" "}
              <strong>réfléchir à la suite de mon parcours d'alternant</strong>{" "}
              et aux{" "}
              <strong>
                environnements dans lesquels j'aimerais continuer à évoluer
              </strong>
              .
            </p>
            <p>Je suis à la recherche d'opportunités qui me permettront de :</p>
            <ul className="goals-list">
              <li>Progresser dans des projets de grande envergure</li>
              <li>Approfondir mes compétences en technologies émergentes</li>
              <li>Contribuer à des solutions innovantes et impactantes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioAbout;
