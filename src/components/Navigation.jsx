import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="site-frame-header">
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={(e) => setMenuOpen(e.target.checked)}
      />
      <label htmlFor="menu-toggle" className="hamburger-label">
        <img
          src="/icons/burger-menu-black.svg"
          alt="Open navigation menu"
          className="hamburger-icon hamburger-icon-light"
          width="24"
          height="24"
        />
        <img
          src="/icons/burger-menu-white.svg"
          alt="Open navigation menu"
          className="hamburger-icon hamburger-icon-dark"
          width="24"
          height="24"
        />
        <img
          src="/icons/exit-right-black.svg"
          alt="Close navigation menu"
          className="close-icon close-icon-light"
          width="24"
          height="24"
        />
        <img
          src="/icons/exit-right-white.svg"
          alt="Close navigation menu"
          className="close-icon close-icon-dark"
          width="24"
          height="24"
        />
      </label>
      <ul>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
        <li><Link to="/cats" onClick={handleLinkClick}>Cats</Link></li>
        <li><Link to="/career" onClick={handleLinkClick}>Career</Link></li>
        <li><Link to="/resume" onClick={handleLinkClick}>Resume</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

