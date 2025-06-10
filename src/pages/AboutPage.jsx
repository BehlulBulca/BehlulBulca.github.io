import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="content-box">
        <h1>{t('about.title')}</h1>
        
        <section className="about-section narrative-text">
          <p>{t('about.narrative_intro')}</p>
          <p>{t('about.narrative_education_experience')}</p>
          <p>{t('about.narrative_skills_aspirations')}</p>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
