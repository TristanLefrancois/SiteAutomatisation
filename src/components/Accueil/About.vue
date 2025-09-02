<template>
    <div class="bubble-section">
      <div class="content-container">
        <div class="text-column">
          <h2 class="section-title">À propos</h2>
          <p class="section-description">
            Entreprise spécialisée dans le développement de solutions digitales innovantes, 
            située à Québec. Notre expertise en développement logiciel, automatisation 
            et création de sites web nous permet d'offrir des solutions complètes et personnalisées 
            pour moderniser et optimiser votre entreprise.
          </p>
          <ul class="service-list">
            <li>Développement de logiciels d'entreprise sur mesure</li>
            <li>Automatisation des workflows et processus métier</li>
            <li>Création de sites web professionnels et modernes</li>
            <li>Solutions digitales personnalisées et innovantes</li>
          </ul>
        </div>
        
        <div class="image-column">
            <img src="/about.png" alt="Solutions digitales innovantes" class="feature-image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BubbleBgSection',
    methods: {
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomColor() {
        const colors = ['#c01313', '#d4af37', '#b8860b', '#daa520'];
        return colors[Math.floor(Math.random() * colors.length)];
      },
      getBubbleStyle() {
        const size = this.getRandomInt(20, 100);
        return {
          width: `${size}px`,
          height: `${size}px`,
          left: `${this.getRandomInt(0, 95)}%`,
          top: `${this.getRandomInt(0, 95)}%`,
          backgroundColor: this.getRandomColor(),
          animationDuration: `${this.getRandomInt(8, 20)}s`,
          animationDelay: `${this.getRandomInt(0, 10)}s`
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .bubble-section {
    position: relative;
    padding: 80px 5%;
    min-height: 600px;
    overflow: hidden;
    background-color: #1a1a1a;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .bubbles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }
  
  .bubble {
    position: absolute;
    border-radius: 50%;
    opacity: 0.2;
    animation: float linear infinite;
    z-index: 1;
  }
  

  
  .content-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 2;
  }
  
  .text-column {
    width: 50%;
    padding-right: 50px;
  }
  
  .image-column {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 17px;
    overflow: hidden;
  }

  .overlay {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 17px;
  }

  .overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .section-title {
    font-size: 36px;
    font-weight: 600;
    color: #8b5cf6;
    margin-bottom: 20px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .section-description {
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 25px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .service-list {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }
  
  .service-list li {
    padding-left: 30px;
    margin-bottom: 15px;
    position: relative;
    font-size: 16px;
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .service-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #8b5cf6;
    font-weight: bold;
  }
  
  .cta-button {
    background-color: #8b5cf6;
    color: #ffffff;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .cta-button:hover {
    background-color: #7c3aed;
  }
  
  .feature-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    .content-container {
      flex-direction: column;
    }
    
    .text-column, 
    .image-column {
      width: 100%;
      padding: 0;
      margin-bottom: 40px;
    }
    
    .text-column {
      order: 2;
    }
    
    .image-column {
      order: 1;
    }
  }
  </style> 