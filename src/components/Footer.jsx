import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social-links">
          <a href="https://github.com/BehlulBulca" target="_blank" rel="noopener noreferrer">{t('footer.github')}</a>
          <a href="https://www.linkedin.com/in/behlulbulca/" target="_blank" rel="noopener noreferrer">{t('footer.linkedin')}</a>
        </div>
        <p className="copyright-text">{t('footer.copyrightMIT', { year: currentYear })}</p>
      </div>
    </footer>
  );
};

export default Footer;
