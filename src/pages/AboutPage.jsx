import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Hakkımızda</h1>

      <section className="about-section">
        <h2>Şirketimizin Hikayesi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="about-section">
        <h2>Misyonumuz</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="about-section">
        <h2>Takımımız</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>[Takım Üyesi Adı]</h3>
            <p>[Pozisyon]</p>
          </div>
          <div className="team-member">
            <h3>[Takım Üyesi Adı]</h3>
            <p>[Pozisyon]</p>
          </div>
          <div className="team-member">
            <h3>[Takım Üyesi Adı]</h3>
            <p>[Pozisyon]</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
