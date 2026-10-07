function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-header">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Contact Me</h1>
        <p>
          Have a project, opportunity or question? Feel free to contact me.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            I am open to discussing projects, internships, collaborations
            and professional opportunities.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>your@email.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>India</span>
          </div>

          <div className="contact-item">
            <strong>Availability</strong>
            <span>Open to opportunities</span>
          </div>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contact;
