import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <p className="hero-subtitle">
            HELLO, I'M
          </p>

          <h1>
            Your Name
          </h1>

          <h2>
            Web Developer & Creative Problem Solver
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications.
            This website showcases my projects, skills, experience and blogs.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              View My Projects
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <div className="profile-placeholder">
            Your Photo
          </div>
        </div>
      </section>


      {/* Skills Preview */}
      <section className="skills-section">

        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>React JS</h3>
            <p>Modern frontend development using React.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web applications.</p>
          </div>

          <div className="skill-card">
            <h3>Node JS</h3>
            <p>Backend development and REST APIs.</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>Working with structured application data.</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
