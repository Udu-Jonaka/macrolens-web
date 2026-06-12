function CtaSection() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-inner">
        {/* Logo placeholder */}
        <div className="cta-logo-area">
          {/* TODO: Replace with your MacroLens app icon */}
          <img
            src="/icon-placeholder.png"
            alt="MacroLens Logo"
            className="cta-logo-placeholder"
          />
        </div>

        {/* Text content */}
        <div className="cta-content">
          <span className="cta-label">Built for your fitness journey.</span>
          <h2>
            Your meals.
            <br />
            Your macros.
          </h2>
          <p>
            Join users who are already tracking smarter and eating better with
            MacroLens.
          </p>
        </div>

        {/* Testimonials */}
        <div className="cta-testimonials">
          <div className="testimonial-card">
            <span className="testimonial-quote-mark">&ldquo;&rdquo;</span>
            <p>
              MacroLens makes tracking so easy. I just snap a photo and it does
              the rest!
            </p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                aria-label="Avatar placeholder"
              ></div>
              <div className="testimonial-info">
                <span className="testimonial-name">Your Name</span>
                <span className="testimonial-role">Fitness Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="testimonial-quote-mark">&ldquo;&rdquo;</span>
            <p>The fasting timer and streak tracking keep me motivated every day!</p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                aria-label="Avatar placeholder"
              ></div>
              <div className="testimonial-info">
                <span className="testimonial-name">Your Name</span>
                <span className="testimonial-role">Health Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
