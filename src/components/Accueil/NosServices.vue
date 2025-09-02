<template>
  <div class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nos Services</h2>
        <p class="section-subtitle">Solutions digitales complètes pour moderniser et optimiser votre entreprise</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">
            <div class="icon-container">
              <i :class="service.icon"></i>
            </div>
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
          <div class="service-overlay">
            <button class="service-btn">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosServices',
  data() {
    return {
      services: [
        {
          title: "Logiciel Entreprise",
          description: "Développement de logiciels sur mesure adaptés aux besoins spécifiques de votre entreprise pour optimiser vos processus métier.",
          icon: "fas fa-laptop-code",
          features: [
            "Applications métier personnalisées",
            "Interfaces utilisateur intuitives",
            "Intégration avec vos systèmes existants",
            "Maintenance et support continu"
          ]
        },
        {
          title: "Automatisation Workflow",
          description: "Automatisez vos processus métier pour améliorer l'efficacité, réduire les erreurs et libérer du temps pour vos équipes.",
          icon: "fas fa-cogs",
          features: [
            "Automatisation des tâches répétitives",
            "Workflows intelligents",
            "Intégration multi-plateformes",
            "Suivi et analyse des performances"
          ]
        },
        {
          title: "Site Web",
          description: "Création de sites web professionnels, modernes et performants pour renforcer votre présence en ligne et attirer plus de clients.",
          icon: "fas fa-globe",
          features: [
            "Design responsive et moderne",
            "Optimisation SEO",
            "Vitesse de chargement optimale",
            "Maintenance et mises à jour"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-section {
  padding: 5rem 0;
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  background: rgba(255,255,255,0.08);
  border-color: rgba(139, 92, 246, 0.3);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #8b5cf6;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  text-align: center;
  margin-bottom: 1.5rem;
}

.icon-container {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: #8b5cf6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.service-card:hover .icon-container {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
}

.icon-container i {
  font-size: 2rem;
  color: white;
}

.service-content {
  text-align: center;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #8b5cf6;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.service-description {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.service-features li {
  padding: 0.5rem 0;
  color: #ffffff;
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1rem;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(139, 92, 246, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 20px;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.service-btn:hover {
  background: white;
  color: #8b5cf6;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .services-section {
    padding: 3rem 0;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}

/* Animation pour les icônes */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.service-card:hover .icon-container {
  animation: pulse 2s infinite;
}
</style>
