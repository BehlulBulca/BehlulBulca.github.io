import React from 'react';
import './ContactPage.css'; // CSS dosyasını import et

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form gönderme mantığını buraya ekleyin
    alert('Mesajınız gönderildi!');
  };

  return (
    <div className="contact-page">
      <h1>İletişim</h1>
      <p className="contact-intro">Bizimle iletişime geçmek için aşağıdaki formu kullanabilir veya iletişim bilgilerimizden bize ulaşabilirsiniz.</p>

      <div className="contact-content">
        <section className="contact-form-section">
          <h2>Bize Mesaj Gönderin</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Adınız Soyadınız:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta Adresiniz:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Konu:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Gönder</button>
          </form>
        </section>

        <section className="contact-info-section">
          <h2>İletişim Bilgilerimiz</h2>
          <p><strong>Adres:</strong> [Şirket Adresiniz Buraya Gelecek]</p>
          <p><strong>Telefon:</strong> [Telefon Numaranız]</p>
          <p><strong>E-posta:</strong> [E-posta Adresiniz]</p>
          <p>Sorularınız veya işbirliği talepleriniz için bizimle iletişime geçmekten çekinmeyin.</p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
