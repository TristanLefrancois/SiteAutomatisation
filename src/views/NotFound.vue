<template>
  <div class="not-found-container">
    <div class="content">
      <h1>404</h1>
      <h2>Page non trouvée</h2>
      <p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
      <router-link to="/" class="back-button">
        <span>Retour à l'accueil</span>
      </router-link>
    </div>
    <div class="bubbles">
      <div v-for="n in 20" :key="n" class="bubble" :style="randomBubbleStyle()"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const randomBubbleStyle = () => {
  const size = Math.floor(Math.random() * 100) + 30;
  const positionX = Math.floor(Math.random() * 100);
  const positionY = Math.floor(Math.random() * 100);
  const animationDuration = Math.floor(Math.random() * 10) + 10;
  const opacity = Math.random() * 0.3 + 0.05;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${positionX}%`,
    top: `${positionY}%`,
    animationDuration: `${animationDuration}s`,
    opacity: opacity
  };
};

onMounted(() => {
  document.title = "Page non trouvée | Entretien Lecarma";
});
</script>

<style scoped>
.not-found-container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
  padding: 0 20px;
}

.content {
  text-align: center;
  z-index: 10;
  max-width: 600px;
  animation: fadeIn 1s ease;
}

h1 {
  font-size: 120px;
  margin: 0;
  color: #e6d7c3;
  line-height: 1.2;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 36px;
  margin: 0 0 20px;
  font-weight: 600;
  color: white;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.8;
  line-height: 1.6;
}

.back-button {
  display: inline-block;
  background-color: #e6d7c3;
  color: #1a1a1a;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #e6d7c3;
  font-size: 16px;
}

.back-button:hover {
  background-color: transparent;
  color: #e6d7c3;
  transform: translateY(-3px);
}

.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #e6d7c3, transparent);
  animation: float linear infinite;
  z-index: 1;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 90px;
  }
  
  h2 {
    font-size: 28px;
  }
  
  p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 70px;
  }
  
  h2 {
    font-size: 24px;
  }
}
</style> 