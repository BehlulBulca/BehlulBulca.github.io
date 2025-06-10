import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './HomePage.css';

// SVG ikonlarını import et
import identificationBadge from '/identification-badge.svg';
import rocketLaunch from '/rocket-launch.svg';
import chatCircleDots from '/chat-circle-dots.svg';

const HomePage = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="new-homepage-container">
      <header className="homepage-header">
        <h1 className="main-title">Behlül Bulca</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
      </header>

      <nav className="home-navigation">
        <Link to="/about" className="nav-link home-nav-link-stacked">
          <img src={identificationBadge} alt={t('home.alt.about')} className="nav-icon" />
          <span>{t('home.nav.about')}</span>
        </Link>
        <Link to="/projects" className="nav-link home-nav-link-stacked">
          <img src={rocketLaunch} alt={t('home.alt.projects')} className="nav-icon" />
          <span>{t('home.nav.projects')}</span>
        </Link>
        <Link to="/contact" className="nav-link home-nav-link-stacked contact-nav-item"> {/* Added contact-nav-item class */}
          <img src={chatCircleDots} alt={t('home.alt.contact')} className="nav-icon" />
          <span>{t('home.nav.contact')}</span>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
