function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            {/* TODO: Replace with your MacroLens icon */}
            <img
              src="/icon-placeholder.png"
              alt="MacroLens Logo"
              className="footer-logo-icon"
            />
            <span className="footer-logo-text">
              Macro<span>Lens</span>
            </span>
          </div>
          <p className="footer-tagline">Track smarter. Eat better.</p>
          <p className="footer-copyright">
            &copy; 2026 JhayCodes. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/screenshots">Screenshots</a>
            </li>
            <li>
              <a href="/changelog">Changelog</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="https://jhaycodes.vercel.app/contact">Contact Us</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
