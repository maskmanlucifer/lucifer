import Wave from "./wave";
const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="projects">
      <p className="section-title">Projects</p>
      <div className="projects-list">
        {projects.map(({ title, status, description, projectUrl }) => {
          return (
            <div
              className="project"
              key={title}
              onClick={() => window.open(projectUrl, "_blank")}
            >
              <div className="info">
                <div className="header">
                  <a href={projectUrl} target="_blank" rel="noreferrer">
                    <p className="title">{title}</p>
                  </a>
                  <div className={`status ${status.toLowerCase()}`}>
                    {status}
                  </div>
                </div>
                <p className="description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Wave />
    </div>
  );
};

export default Projects;
