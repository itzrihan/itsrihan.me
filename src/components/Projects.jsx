import './styles/Projects.css';

const projects = [
  {
    title: 'HI-API',
    description: 'Free anime streaming API serving 50k+ monthly requests',
    tags: ['Node.js', 'REST API', 'MongoDB', 'Cloudflare'],
    link: 'https://github.com/itzrihan/hi-api',
    // Add your project image path
    image: ''
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {/* Add your project image here */}
              <div className="image-placeholder"></div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
