import './styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm currently looking for new opportunities. Whether you have a 
            question or just want to say hi, I'll get back to you!
          </p>
          <div className="contact-details">
            <a href="mailto:mononrihan7@gmail.com">mononrihan7@gmail.com</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/itzrihan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/msrihan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/itzrihan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
