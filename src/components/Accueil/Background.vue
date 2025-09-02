<template>
    <div class="yo">
        <div class="hero-section">
            <div class="bg-image-container">
                <img src="../../assets/bg.png" alt="Technology background" class="bg-image animated fade-in">
                <div class="shadow-overlay animated fade-in"></div>
            </div>

            <div class="content-overlay">
                <div class="text-column animated slide-in-left">
                    <div class="typewriter-container animated fade-in-up delay-3">
                        <span class="typewriter-text">{{ currentText }}</span>
                        <span class="cursor">|</span>
                    </div>
                    <p class="subheading animated fade-in-up delay-2">Transformez votre entreprise avec nos solutions digitales innovantes. Logiciels sur mesure, automatisation des processus et sites web professionnels pour propulser votre croissance.</p>
                    <div class="button-group animated fade-in-up delay-4">
                        <button class="service-button">NOS SERVICES</button>
                        <button class="contact-button">CONTACTER</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            services: [
                "Logiciels d'entreprise sur mesure",
                "Automatisation des workflows",
                "Sites web professionnels",
                "Solutions digitales innovantes",
                "Optimisation des processus",
                "Développement web moderne"
            ],
            currentServiceIndex: 0,
            currentText: "",
            isTyping: true,
            isDeleting: false,
            typeSpeed: 100,
            deleteSpeed: 50,
            pauseTime: 2000
        }
    },
    mounted() {
        this.triggerAnimations();
        this.startTypewriter();
    },
    methods: {
        triggerAnimations() {
            const animatedElements = document.querySelectorAll('.animated');
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, 100);
            });
        },
        startTypewriter() {
            this.typeWriter();
        },
        typeWriter() {
            const currentService = this.services[this.currentServiceIndex];
            
            if (this.isTyping) {
                if (this.currentText.length < currentService.length) {
                    this.currentText = currentService.substring(0, this.currentText.length + 1);
                    setTimeout(() => this.typeWriter(), this.typeSpeed);
                } else {
                    // Fin de l'écriture, pause puis suppression
                    setTimeout(() => {
                        this.isTyping = false;
                        this.isDeleting = true;
                        this.typeWriter();
                    }, this.pauseTime);
                }
            } else if (this.isDeleting) {
                if (this.currentText.length > 0) {
                    this.currentText = this.currentText.substring(0, this.currentText.length - 1);
                    setTimeout(() => this.typeWriter(), this.deleteSpeed);
                } else {
                    // Fin de la suppression, passer au service suivant
                    this.isDeleting = false;
                    this.isTyping = true;
                    this.currentServiceIndex = (this.currentServiceIndex + 1) % this.services.length;
                    setTimeout(() => this.typeWriter(), 500);
                }
            }
        }
    }
}
</script>

<style scoped>
.yo {
    background-color: #1a1a1a;
}

.hero-section {
    position: relative;
    width: 100%;
    height: 85vh;
    overflow: hidden;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.bg-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(26, 26, 26, 0.7));
    pointer-events: none;
}

.content-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
}

.text-column {
    width: 100%;
    max-width: 800px;
    text-align: center;
    color: white;
}

.heading {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 40px;
    color: white;
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.3;
}

.subheading {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 30px;
    line-height: 1.5;
    font-weight: 400;

}

.typewriter-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 30px;
    color: #8b5cf6;
    margin-bottom: 30px;
    min-height: 30px;
    font-weight: 700;
}

.typewriter-text {
    color: #8b5cf6;
}

.cursor {
    color: #8b5cf6;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.button-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.service-button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #8b5cf6;
    color: #ffffff;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    transition: background-color 0.3s;
}

.service-button:hover {
    background-color: #7c3aed;
}

.contact-button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #8b5cf6;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;
}

.contact-button:hover {
    background-color: #8b5cf6;
    color: #ffffff;
}

/* Animations */
.animated {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: both;
}

.animated.active {
    opacity: 1;
}

.fade-in {
    animation-name: fadeIn;
}

.fade-in-up {
    animation-name: fadeInUp;
}

.slide-in-left {
    animation-name: slideInLeft;
}

.slide-in-right {
    animation-name: slideInRight;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-3 {
    animation-delay: 0.6s;
}

.delay-4 {
    animation-delay: 0.8s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 40px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100px, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translate3d(100px, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

/* Improved mobile responsiveness */
@media (max-width: 992px) {
    .hero-section {
        height: auto;
        min-height: 100vh;
    }
    
    .content-overlay {
        position: relative;
        padding: 60px 20px;
    }
    
    .text-column {
        text-align: center;
    }
    
    .heading {
        font-size: 32px;
        margin-bottom: 15px;
    }
    
    .subheading {
        font-size: 16px;
        margin-bottom: 25px;
    }
    
    .typewriter-container {
        font-size: 18px;
        margin-bottom: 25px;
    }
    
    .button-group {
        flex-direction: column;
        align-items: center;
    }
    
    .service-button,
    .contact-button {
        width: 200px;
    }
}

@media (max-width: 576px) {
    .content-overlay {
        padding: 90px 15px;
    }
    
    .heading {
        font-size: 28px;
    }
    
    .subheading {
        font-size: 15px;
    }
    
    .typewriter-container {
        font-size: 16px;
        margin-bottom: 20px;
    }
    
    .button-group {
        gap: 15px;
    }
    
    .service-button,
    .contact-button {
        width: 180px;
        font-size: 13px;
        padding: 10px 25px;
    }
}
</style>