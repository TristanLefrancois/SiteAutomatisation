<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <h3>Techno Digital</h3>
          <p>Votre partenaire de confiance en solutions digitales</p>
        </div>
      </div>

      <div class="footer-section">
        <h4>Services</h4>
        <ul class="footer-links">
          <li><a href="#">Logiciel d'entreprise</a></li>
          <li><a href="#">Automatisation des workflows</a></li>
          <li><a href="#">Sites web</a></li>
          <li><a href="#">Solutions digitales</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <div class="contact-info">
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Château-Richer, QC</span>
          </div>
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+1 (123) 456-7890</span>
          </div>
          <div class="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>info@technodigital.com</span>
          </div>
        </div>
       
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2024 Techno Digital. Tous droits réservés.</p>
        <div class="footer-bottom-links">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-logo h3 {
  color: #8b5cf6;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-logo p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #2e2c2c;
  color: #ffffff;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background-color: #8b5cf6;
  transform: translateY(-2px);
}

.footer-section h4 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #8b5cf6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-links a:hover {
  color: #8b5cf6;
  padding-left: 5px;
}

.contact-info {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 0.95rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.contact-item svg {
  color: #8b5cf6;
  flex-shrink: 0;
}

.footer-cta {
  display: inline-block;
  background-color: #8b5cf6;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-cta:hover {
  background-color: #7c3aed;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding: 1.5rem 2rem;
  background-color: #151515;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #ffffff;
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-bottom-links a:hover {
  color: #8b5cf6;
}

/* Mobile Styles */
@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem 2rem;
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem 1.5rem;
  }

  .footer-section:first-child {
    grid-column: 1;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-bottom-links {
    justify-content: center;
  }

  .footer-logo h3 {
    font-size: 1.5rem;
  }
}
</style>
