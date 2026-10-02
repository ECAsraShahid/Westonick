function Footer({ navItems }) {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <a className="navbar-brand text-white fw-bold" href="#home">
          <span className="brand-leaf">◆</span> Nexora
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <nav className="social-links" aria-label="Social media">
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          <a href="https://x.com/" aria-label="X">𝕏</a>
          <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
          <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <small>© 2025 Nexora. All rights reserved.</small>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
