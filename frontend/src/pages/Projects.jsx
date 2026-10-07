function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern responsive portfolio website showcasing skills, projects and professional information.",
      tech: "React JS, Vite, CSS",
    },
    {
      title: "Smart Expense Tracker",
      description:
        "A web application for managing income, expenses, budgets and financial reports.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Blog CMS",
      description:
        "A content management system where users can create, manage and publish blog posts.",
      tech: "React JS, Node JS",
    },
  ];

  return (
    <main className="projects-page">

      <section className="projects-header">
        <p className="section-label">MY WORK</p>
        <h1>Featured Projects</h1>
        <p>
          Here are some projects that demonstrate my skills and
          experience in web development.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              Project {index + 1}
            </div>

            <div className="project-info">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <button className="project-btn">
                View Project
              </button>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}

export default Projects;
