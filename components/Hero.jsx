function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Android App
          </div>

          <h1>
            Track smarter.
            <br />
            <span>Eat better.</span>
          </h1>

          <p>
            MacroLens helps you scan meals, track macros, and reach your fitness
            goals with AI-powered food recognition.
          </p>

          {/* Feature bullets */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              AI Meal Scanning
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Macro Tracking
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Intermittent Fasting
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Achievements & Streaks
            </div>
          </div>

          {/* Action buttons */}
          <div className="hero-actions" id="download">
            <a
              href="https://www.dropbox.com/scl/fi/7ey5d2rt2qnq0nyqpzbrz/macrolens.apk?rlkey=skxc61h2zdgrnz9gruwsk48lg&st=mnenjakm&dl=0"
              className="hero-download-btn"
            >
              <i
                className="fa-brands fa-android"
                aria-hidden="true"
                suppressHydrationWarning
              ></i>
              <div className="hero-download-text">Download APK</div>
            </a>
            <a href="/screenshots" className="hero-screenshots-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              View Screenshots
            </a>
          </div>

          <div className="hero-secure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Safe &amp; Secure · Built with Expo
          </div>
        </div>

        {/* Right: Phone mockup placeholder */}
        <div className="hero-phone">
          {/* TODO: Replace with an actual screenshot of the app */}
          <img
            src="/hero-phone-placeholder.png"
            className="hero-phone-placeholder"
            alt="MacroLens App Preview"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
