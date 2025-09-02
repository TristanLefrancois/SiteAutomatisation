<template>
    <section class="technologies-section">
        <div class="section-header">
            <h2 class="section-title">Nos Technologies</h2>
        </div>

        <div class="technologies-container">
            <div class="technologies-grid">
                <div v-for="(tech, index) in technologies" :key="index" class="tech-item" :style="getItemStyle(index)"
                    @mouseenter="setRandomColor(index)">
                    <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
                    <span class="tech-name">{{ tech.name }}</span>
                </div>
            </div>
        </div>


    </section>
</template>

<script>

export default {
    name: 'NosTechnologies',
    data() {
        return {
            technologies: [
                { name: 'HTML5', icon: '/LogoTechno/html.png' },
                { name: 'Angular', icon: '/LogoTechno/angular.png' },
                { name: 'CSS3', icon: '/LogoTechno/css.png' },
                { name: 'Kotlin', icon: '/LogoTechno/kotlin.png' },
                { name: 'JavaScript', icon: '/LogoTechno/js.png' },
                { name: 'Vue.js', icon: '/LogoTechno/vue.png' },
                { name: 'Flutter', icon: '/LogoTechno/flutter.png' },
                { name: 'React', icon: '/LogoTechno/react.png' },
                { name: 'Node.js', icon: '/LogoTechno/node.png' },
                { name: 'Php', icon: '/LogoTechno/php.png' },
                { name: 'Python', icon: '/LogoTechno/python.png' },
            ],
            positions: [],
            isInitialized: false,
            themeColors: ['#00BEA3', '#9CCA4D', '#FF4081'],
            itemColors: {},
            initialPositions: [],
            colorCounts: {}
        }
    },
    created() {
        this.positions = this.technologies.map(() => ({
            x: Math.random() * 60 + 20,
            y: Math.random() * 60 + 20,
            vx: (Math.random() - 0.5) * (window.innerWidth <= 768 ? 0.4 : 0.05),
            vy: (Math.random() - 0.5) * (window.innerWidth <= 768 ? 0.4 : 0.05)
        }));
        this.initialPositions = this.positions.map(pos => ({ ...pos }));
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.startAnimation();
                this.isInitialized = true;
            }, 100);
            window.addEventListener('resize', this.handleResize);
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
        this.stopAnimation();
    },
    methods: {
        initializePositions() {
            this.positions = this.initialPositions.map(pos => ({ ...pos }));
        },
        getPositionForIndex(index) {
            if (!this.isInitialized || !this.positions[index]) {
                return {
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                };
            }
            return {
                left: `${this.positions[index].x}%`,
                top: `${this.positions[index].y}%`,
                transform: 'none'
            };
        },
        startAnimation() {
            this.animationId = requestAnimationFrame(this.animate);
        },
        stopAnimation() {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        },
        animate() {
            this.positions.forEach((pos, index) => {
                pos.x += pos.vx;
                pos.y += pos.vy;

                if (pos.x < 5 || pos.x > 95) {
                    pos.vx *= -1;
                }
                if (pos.y < 5 || pos.y > 95) {
                    pos.vy *= -1;
                }

                const element = document.querySelectorAll('.tech-item')[index];
                if (element) {
                    element.style.left = `${pos.x}%`;
                    element.style.top = `${pos.y}%`;
                }
            });

            this.animationId = requestAnimationFrame(this.animate);
        },
        handleResize() {
            if (!this.isInitialized) {
                this.initializePositions();
            }
        },
        getRandomColor() {
            const randomIndex = Math.floor(Math.random() * this.themeColors.length);
            return this.themeColors[randomIndex];
        },
        setRandomColor(index) {
            const color = this.getRandomColor();
            this.itemColors[index] = color;
            this.colorCounts[color] = (this.colorCounts[color] || 0) + 1;
        },
        getItemStyle(index) {
            const position = this.getPositionForIndex(index);
            return {
                ...position,
                '--hover-color': this.itemColors[index] || 'rgba(255, 255, 255, 0.1)'
            };
        }
    }
}
</script>

<style scoped>
.technologies-section {
    position: relative;
    background-color: #121212;
    color: white;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    height: 800px;
}

.section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #cec3c7;
    margin-bottom: 20px;
    text-align: center;
}

.ligne-rose-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.technologies-container {
    position: relative;
    width: 90%;
    height: 500px;
    margin: 0 auto;
    overflow: visible;
}

.technologies-grid {
    position: relative;
    width: 100%;
    height: 100%;
}

.tech-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 15px;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.tech-item:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px var(--hover-color);
    background-color: var(--hover-color);
}

.tech-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 10px;
}

.tech-name {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: white;
}

@media (min-width: 768px) {
    .section-title {
        font-size: 2rem;
        padding-top: 4rem;

    }
}

@media (max-width: 768px) {

    .technologies-section {
        padding: 60px 0 100px;
    }

    .section-title {
        font-size: 2rem;
    }

    .technologies-container {
        height: 300px;
    }

    .tech-item {
        width: 80px;
        height: 80px;
        padding: 10px;
        transition: all 0.2s ease;
    }

    .tech-icon {
        width: 40px;
        height: 40px;
    }

    .tech-name {
        font-size: 12px;
    }

    .tech-item:hover {
        transform: none;
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.1);
    }
}

.scoreboard {
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    max-width: 600px;
    margin: 2rem auto;
}

.scoreboard h3 {
    color: #cec3c7;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.scoreboard-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.scoreboard-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}

.color-box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.color-name {
    color: white;
    font-weight: 600;
}

.color-count {
    color: #cec3c7;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .scoreboard {
        margin: 1rem;
    }

    .scoreboard-item {
        padding: 0.3rem 0.6rem;
    }

    .color-box {
        width: 15px;
        height: 15px;
    }

    .color-name {
        font-size: 0.8rem;
    }

    .color-count {
        font-size: 0.7rem;
    }
}

@media (max-width: 1024px) {
    .scoreboard {
        display: none;
    }
}
</style>
