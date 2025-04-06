import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>M. S. Rihan</h1>
        <h2>Full-Stack Developer | DSA Specialist | API Architect</h2>
        <p>Building scalable solutions with cutting-edge technology</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="/assets/resume.pdf" download className="btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image">
        {/* Add your profile image here */}
        <div className="image-placeholder"></div>
      </div>
    </section>
  );
};

export default Hero;
