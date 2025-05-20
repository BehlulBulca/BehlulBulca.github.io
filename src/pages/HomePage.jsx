import React from 'react';
import './HomePage.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // For CTA button

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <h1 className="hero-title">Şirketimize Hoş Geldiniz!</h1>
        <p className="hero-subtitle">Sektör lideri çözümlerimizle tanışın.</p>
        <Link to="/services" className="cta-button">Hizmetlerimizi Keşfedin</Link>
      </section>

      <section className="features-section">
        <h2 className="features-title">Neden Biz?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Yenilikçi Yaklaşım</h3>
            <p>Projelerinize modern ve etkili çözümler sunuyoruz.</p>
          </div>
          <div className="feature-item">
            <h3>Uzman Kadro</h3>
            <p>Alanında deneyimli profesyonellerle çalışın.</p>
          </div>
          <div className="feature-item">
            <h3>Müşteri Odaklılık</h3>
            <p>İhtiyaçlarınızı anlıyor ve size özel çözümler üretiyoruz.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
