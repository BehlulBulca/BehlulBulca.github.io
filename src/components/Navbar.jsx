import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Main navbar container */}
      <div className="navbar-container"> {/* Inner container for content alignment */}
        <div className="navbar-content"> {/* Flex container for logo and links */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              Şirket Adı
            </Link>
          </div>
          <div className="navbar-links-desktop">
            <ul className="navbar-menu">
              <li><Link to="/" className="navbar-link">Ana Sayfa</Link></li>
              <li><Link to="/about" className="navbar-link">Hakkımızda</Link></li>
              <li><Link to="/services" className="navbar-link">Hizmetlerimiz</Link></li>
              <li><Link to="/contact" className="navbar-link">İletişim</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
