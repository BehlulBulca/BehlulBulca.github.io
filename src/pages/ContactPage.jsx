import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './ContactPage.css'; // CSS dosyasını import et

const ContactPage = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="contact-page">
      <h1>{t('contactPage.title')}</h1>
      <p className="contact-intro">
        {t('contactPage.intro')}
      </p>
      
      <div className="contact-content-wrapper">
        <div className="contact-info">
          <h2>{t('contactPage.infoTitle')}</h2>
          <p><strong>{t('contactPage.emailLabel')}</strong> <a href="mailto:behlulbulca02@gmail.com">behlulbulca02@gmail.com</a></p>
          <p><strong>{t('contactPage.linkedInLabel')}</strong> <a href="https://www.linkedin.com/in/behlulbulca/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/behlulbulca/</a></p>
          <p><strong>{t('contactPage.githubLabel')}</strong> <a href="https://github.com/BehlulBulca" target="_blank" rel="noopener noreferrer">https://github.com/BehlulBulca</a></p>
          {/* İsterseniz buraya telefon numarası veya başka bilgiler de ekleyebilirsiniz */}
          {/* <p><strong>Telefon:</strong> +90 555 123 4567</p> */}
        </div>

        {/* contact-form-container ve içindeki form kaldırıldı */}
      </div>
    </div>
  );
};

export default ContactPage;
