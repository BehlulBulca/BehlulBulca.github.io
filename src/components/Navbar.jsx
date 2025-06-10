import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // useTranslation hook'unu import et
import './Navbar.css'; // Import the CSS file

// SVG ikonlarını import et (HomePage'den alınanlarla aynı)
import identificationBadge from '/identification-badge.svg';
import rocketLaunch from '/rocket-launch.svg';
import chatCircleDots from '/chat-circle-dots.svg';
// Ana sayfa için genel bir ikon da eklenebilir, şimdilik yok.

const Navbar = () => {
  const { t, i18n } = useTranslation(); // t fonksiyonunu ve i18n instance'ını al

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar"> {/* Main navbar container */}
      <div className="navbar-container"> {/* Inner container for content alignment */}
        <div className="navbar-content"> {/* Flex container for logo and links */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              Behlül Bulca {/* Şirket Adı kaldırıldı ve kullanıcı adı eklendi */}
            </Link>
          </div>
          <div className="navbar-links-desktop">
            <ul className="navbar-menu">
              {/* <li><Link to="/" className="navbar-link">Home</Link></li> Ana Sayfa -> Home */}
              <li>
                <Link to="/about" className="navbar-link">
                  <img src={identificationBadge} alt={t('navbar.about')} className="navbar-icon" />
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <NavLink
                  to="/projects" // Projelerim -> projects (zaten İngilizce)
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active-link' : 'navbar-link'
                  }
                >
                  <img src={rocketLaunch} alt={t('navbar.projects')} className="navbar-icon" />
                  {t('navbar.projects')}
                </NavLink>
              </li>
              <li>
                <Link to="/contact" className="navbar-link">
                  <img src={chatCircleDots} alt={t('navbar.contact')} className="navbar-icon" />
                  {t('navbar.contact')}
                </Link>
              </li> {/* İletişim -> Contact */}
            </ul>
          </div>
          <div className="navbar-language-switcher">
            <span
              className={`language-option ${i18n.language === 'en' ? 'active-language' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              {t('languageSwitcher.en')}
            </span>
            <span className="language-separator">|</span>
            <span
              className={`language-option ${i18n.language === 'tr' ? 'active-language' : ''}`}
              onClick={() => changeLanguage('tr')}
            >
              {t('languageSwitcher.tr')}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
