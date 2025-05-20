import React from 'react';
import './Footer.css'; // Stil dosyasını daha sonra oluşturacağız

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; ${new Date().getFullYear()} Şirket Adı. Tüm Hakları Saklıdır.</p>
    </footer>
  );
};

export default Footer;
