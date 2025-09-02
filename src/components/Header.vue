<template>
  <header :class="{ 'header-scrolled': isScrolled }">
    <nav>
      <div class="logo">Titre</div>

      <div class="menu-toggle" @click="toggleMenu" :class="{ 'active': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-links" :class="{ 'active': menuOpen }">
        <li><a href="#accueil" @click="scrollToSection('accueil')">Accueil</a></li>
        <li><a href="#about" @click="scrollToSection('about')">À propos</a></li>
        <li><a href="#services" @click="scrollToSection('services')">Services</a></li>
        <li><a href="#contact" @click="scrollToSection('contact')">Contact</a></li>
        <li class="call-to-action"><a href="tel:+1234567890" class="cta-button">Appelez-nous</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value

  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToSection = (sectionId) => {
  closeMenu()
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 100 // Hauteur approximative du header
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const handleResize = () => {
  if (window.innerWidth > 992 && menuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  document.head.appendChild(link)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 2rem;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header-scrolled {
  background-color: rgba(26, 26, 26, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #8b5cf6;
  z-index: 10;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  color: white;
  font-weight: 500;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #8b5cf6;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #8b5cf6;
}

.nav-links a:hover::after {
  width: 100%;
}

.call-to-action {
  margin-left: 1rem;
}

.call-to-action a {
  background-color: #8b5cf6;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #7c3aed;
  color: #ffffff;
}

.cta-button::after {
  display: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 10;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 992px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 80%;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: #1a1a1a;
    padding: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .nav-links a {
    font-size: 18px;
    display: block;
    padding: 0.8rem;
  }

  .call-to-action {
    margin: 1rem 0 0;
  }

  .cta-button {
    display: block;
    width: 100%;
  }

  /* For smaller phones */
  @media (max-width: 576px) {
    header {
      padding: 1rem;
    }

    .logo {
      font-size: 1.2rem;
    }

    .nav-links {
      width: 100%;
      max-width: none;
    }
  }
}
</style>