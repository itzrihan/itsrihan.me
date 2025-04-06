import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm Rihan from Rangpur, Bangladesh. I'm a passionate developer with 
            expertise in Data Structures & Algorithms and full-stack development.
          </p>
          <p>
            I built HI-API, a free anime streaming API serving thousands of requests monthly, 
            demonstrating my ability to create production-ready solutions.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects and 
            exploring new technologies in the AI space.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>10k+</h3>
            <p>Hours Coding</p>
          </div>
          <div className="stat-item">
            <h3>50k+</h3>
            <p>Monthly API Requests</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>DSA Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
