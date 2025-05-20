import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Hizmetlerimiz</h1>
      <p className="services-intro">Sunduğumuz çeşitli hizmetlerle tanışın. İşletmenizin ihtiyaçlarına yönelik çözümler üretiyoruz.</p>

      <div className="services-grid">
        <div className="service-card">
          <h2>Web Geliştirme</h2>
          <p>
            Modern ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz.
            Responsive tasarım, SEO optimizasyonu ve e-ticaret çözümleri sunuyoruz.
          </p>
        </div>

        <div className="service-card">
          <h2>Mobil Uygulama Geliştirme</h2>
          <p>
            iOS ve Android platformları için özel mobil uygulamalar geliştiriyoruz.
            Kullanıcı deneyimini ön planda tutarak yenilikçi çözümler üretiyoruz.
          </p>
        </div>

        <div className="service-card">
          <h2>Danışmanlık</h2>
          <p>
            Teknoloji ve yazılım konularında stratejik danışmanlık hizmetleri sunuyoruz.
            Proje yönetimi, sistem analizi ve dijital dönüşüm konularında size rehberlik ediyoruz.
          </p>
        </div>

        <div className="service-card">
          <h2>Bulut Çözümleri</h2>
          <p>
            İşletmenizin verimliliğini artırmak için bulut tabanlı çözümler sunuyoruz.
            Veri depolama, yedekleme ve altyapı yönetimi konularında destek sağlıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
