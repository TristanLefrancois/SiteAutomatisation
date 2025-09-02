  <template>
    <section id="contact-form" class="contact-form-section">
      <div class="container">
        <div class="form-header animate-fade-in-up">
          <h2 class="form-title">Démarrons Votre Projet</h2>
          <p class="form-subtitle">Remplissez ce formulaire et recevez un devis personnalisé sous 24h</p>
        </div>

        <div class="form-container animate-slide-in-up" style="animation-delay: 0.2s;">
          <form @submit.prevent="submitForm" class="advanced-form">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
            </div>

            <div v-show="currentStep === 1" class="form-step">
              <h3 class="step-title">
                <i class="fas fa-user"></i>
                Vos Informations
              </h3>
              
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label">Prénom *</label>
                  <input 
                    type="text" 
                    v-model="form.firstName"
                    class="form-input"
                    :class="{ 'error': errors.firstName }"
                    @blur="validateField('firstName')"
                    required
                  >
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>

                <div class="form-group">
                  <label class="form-label">Nom *</label>
                  <input 
                    type="text" 
                    v-model="form.lastName"
                    class="form-input"
                    :class="{ 'error': errors.lastName }"
                    @blur="validateField('lastName')"
                    required
                  >
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>

                <div class="form-group">
                  <label class="form-label">Email *</label>
                  <input 
                    type="email" 
                    v-model="form.email"
                    class="form-input"
                    :class="{ 'error': errors.email }"
                    @blur="validateField('email')"
                    required
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <div class="form-group">
                  <label class="form-label">Téléphone *</label>
                  <input 
                    type="tel" 
                    v-model="form.phone"
                    class="form-input"
                    :class="{ 'error': errors.phone }"
                    @blur="validateField('phone')"
                    placeholder="(514) 123-4567"
                    required
                  >
                  <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                </div>
              </div>
            </div>

            <div v-show="currentStep === 2" class="form-step">
              <h3 class="step-title">
                <i class="fas fa-tools"></i>
                Type de Service
              </h3>
              
              <div class="service-options">
                <div 
                  v-for="service in services" 
                  :key="service.id"
                  class="service-option"
                  :class="{ 'selected': form.selectedServices.includes(service.id) }"
                  @click="toggleService(service.id)"
                >
                  <div class="service-icon">
                    <i :class="service.icon"></i>
                  </div>
                  <div class="service-info">
                    <h4 class="service-name">{{ service.name }}</h4>
                    <p class="service-description">{{ service.description }}</p>
                  </div>
                  <div class="service-check">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
              </div>
            </div>

            <div v-show="currentStep === 3" class="form-step">
              <h3 class="step-title">
                <i class="fas fa-clipboard-list"></i>
                Détails du Projet
              </h3>
              
              <!-- Aide-mémoire -->
              <div class="aide-memoire">
                <h4 class="aide-memoire-title">
                  <i class="fas fa-lightbulb"></i>
                  Aide-mémoire pour votre description
                </h4>
                <div class="aide-memoire-content">
                  <p>Pour nous aider à mieux comprendre votre projet, pensez à mentionner :</p>
                  <ul class="aide-memoire-list">
                    <li><strong>Type d'entreprise</strong> et secteur d'activité</li>
                    <li><strong>Nombre d'utilisateurs</strong> prévus</li>
                    <li><strong>Fonctionnalités souhaitées</strong> principales</li>
                    <li><strong>Intégrations</strong> avec vos systèmes existants</li>
                    <li><strong>Délais</strong> de livraison souhaités</li>
                    <li><strong>Budget approximatif</strong> si applicable</li>
                    <li><strong>Technologies préférées</strong> si vous en avez</li>
                    <li>Tout autre détail pertinent pour votre projet</li>
                  </ul>
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Description du projet *</label>
                <textarea 
                  v-model="form.projectDescription"
                  class="form-textarea"
                  :class="{ 'error': errors.projectDescription }"
                  @blur="validateField('projectDescription')"
                  rows="5"
                  placeholder="Décrivez votre projet en détail..."
                  required
                ></textarea>
                <span v-if="errors.projectDescription" class="error-message">{{ errors.projectDescription }}</span>
              </div>
            </div>

            <div class="form-navigation">
              <button 
                v-if="currentStep > 1"
                type="button" 
                @click="previousStep"
                class="nav-btn prev-btn"
              >
                <i class="fas fa-arrow-left"></i>
                Précédent
              </button>

              <button 
                v-if="currentStep < 3"
                type="button" 
                @click="nextStep"
                class="nav-btn next-btn"
                :disabled="!isStepValid"
              >
                Suivant
                <i class="fas fa-arrow-right"></i>
              </button>

              <button 
                v-if="currentStep === 3"
                type="submit" 
                class="submit-btn"
                :disabled="!isFormValid || isSubmitting"
              >
                <span v-if="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Envoyer la demande
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin"></i>
                  Envoi en cours...
                </span>
              </button>
            </div>
          </form>

          <div v-if="showSuccessMessage" class="success-message animate-fade-in">
            <div class="success-content">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>Demande envoyée avec succès !</h3>
              <p>Nous avons bien reçu votre demande et nous vous contacterons sous 24h avec votre devis personnalisé.</p>
              <div class="success-details">
                <p><strong>Email de confirmation envoyé à:</strong> {{ form.email }}</p>
              </div>
              <button @click="resetForm" class="reset-btn">
                <i class="fas fa-plus"></i>
                Nouvelle demande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  
  export default {
    name: 'ContactFormAdvanced',
    data() {
      return {
        currentStep: 1,
        isSubmitting: false,
        showSuccessMessage: false,
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          selectedServices: [],
          projectDescription: ''
        },
        errors: {},
        services: [
          {
            id: 'logiciel',
            name: 'Logiciel Entreprise',
            description: 'Développement de logiciels sur mesure adaptés aux besoins spécifiques de votre entreprise',
            icon: 'fas fa-laptop-code'
          },
          {
            id: 'automatisation',
            name: 'Automatisation Workflow',
            description: 'Automatisez vos processus métier pour améliorer l\'efficacité et réduire les erreurs',
            icon: 'fas fa-cogs'
          },
          {
            id: 'siteweb',
            name: 'Site Web',
            description: 'Création de sites web professionnels, modernes et performants',
            icon: 'fas fa-globe'
          },
          {
            id: 'consultation',
            name: 'Consultation IT',
            description: 'Conseils et accompagnement pour optimiser votre infrastructure technologique',
            icon: 'fas fa-chart-line'
          }
        ]
      }
    },
    computed: {
      progressPercentage() {
        return (this.currentStep / 3) * 100;
      },
      isStepValid() {
        switch (this.currentStep) {
          case 1:
            return this.form.firstName && this.form.lastName && this.form.email && this.form.phone && 
                  !this.errors.firstName && !this.errors.lastName && !this.errors.email && !this.errors.phone;
          case 2:
            return this.form.selectedServices.length > 0;
          case 3:
            return this.form.projectDescription && !this.errors.projectDescription;
          default:
            return false;
        }
      },
      isFormValid() {
        return this.isStepValid;
      }
    },
    methods: {
      nextStep() {
        if (this.isStepValid && this.currentStep < 3) {
          this.currentStep++;
        }
      },
      previousStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      toggleService(serviceId) {
        const index = this.form.selectedServices.indexOf(serviceId);
        if (index > -1) {
          this.form.selectedServices.splice(index, 1);
        } else {
          this.form.selectedServices.push(serviceId);
        }
      },
      validateField(fieldName) {
        this.errors = { ...this.errors };
        delete this.errors[fieldName];

        switch (fieldName) {
          case 'firstName':
          case 'lastName':
            if (!this.form[fieldName] || this.form[fieldName].length < 2) {
              this.errors[fieldName] = 'Minimum 2 caractères requis';
            }
            break;
          case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
              this.errors.email = 'Email invalide';
            }
            break;
          case 'phone':
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(this.form.phone) || this.form.phone.length < 10) {
              this.errors.phone = 'Numéro de téléphone invalide';
            }
            break;
          case 'projectDescription':
            if (!this.form.projectDescription || this.form.projectDescription.length < 10) {
              this.errors.projectDescription = 'Description trop courte (minimum 10 caractères)';
            }
            break;
        }
      },
      async submitForm() {
        this.isSubmitting = true;
        
        try {
          // Validate form data
          const validation = validateContactForm(this.form);
          if (!validation.isValid) {
            alert('Veuillez corriger les erreurs suivantes:\n' + validation.errors.join('\n'));
            this.isSubmitting = false;
            return;
          }

          // Prepare the data for the API
          const formData = {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            phone: this.form.phone,
            selectedServices: this.form.selectedServices,
            projectDescription: this.form.projectDescription
          };

          // Submit to API using utility function
          const result = await submitContactForm(formData);
            
          this.isSubmitting = false;
          this.showSuccessMessage = true;
        } catch (error) {
          console.error('Error submitting form:', error);
          this.isSubmitting = false;
          
          // Show more specific error message
          let errorMessage = 'Une erreur est survenue lors de l\'envoi du formulaire.';
          if (error.message.includes('fetch')) {
            errorMessage = 'Problème de connexion. Veuillez vérifier votre connexion internet et réessayer.';
          } else if (error.message.includes('429')) {
            errorMessage = 'Trop de tentatives. Veuillez attendre quelques minutes avant de réessayer.';
          } else if (error.message.includes('500')) {
            errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
          }
          
          alert(errorMessage);
        }
      },
      resetForm() {
        this.currentStep = 1;
        this.showSuccessMessage = false;
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          selectedServices: [],
          projectDescription: '',
        };
        this.errors = {};
      }
    }
  }
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Animation Classes */
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-slide-in-up {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .contact-form-section {
    background: #1a1a1a;
    padding: 40px 0;
    padding-bottom: 100px;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .contact-form-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.05);
  pointer-events: none;
  z-index: 1;
}

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .form-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .form-title {
    font-size: 42px;
    font-weight: 700;
    color: #8b5cf6;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .form-subtitle {
    font-size: 18px;
    color: #cec3c7;
    max-width: 600px;
    margin: 0 auto;
  }

  .form-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 25px;
    padding: 3rem;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
    position: relative;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-bottom: 3rem;
    overflow: hidden;
  }

  .progress-fill {
  height: 100%;
  background: #8b5cf6;
  border-radius: 3px;
  transition: width 0.3s ease;
}

  .step-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 24px;
    font-weight: 700;
    color: #8b5cf6;
    margin-bottom: 2rem;
  }

  .step-title i {
    color: #8b5cf6;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-size: 14px;
    font-weight: 600;
    color: #cec3c7;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: 'Open Sans', sans-serif;
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
  }

  /* Aide-mémoire styles */
.aide-memoire {
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.aide-memoire::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #8b5cf6;
}

  .aide-memoire-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 18px;
    font-weight: 700;
    color: #8b5cf6;
    margin: 0 0 1rem 0;
  }

  .aide-memoire-title i {
    color: #8b5cf6;
    font-size: 1.1rem;
  }

  .aide-memoire-content p {
    color: #cec3c7;
    margin: 0 0 1rem 0;
    font-size: 14px;
  }

  .aide-memoire-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.5rem;
  }

  .aide-memoire-list li {
    color: #cec3c7;
    font-size: 13px;
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }

  .aide-memoire-list li::before {
    content: '•';
    color: #8b5cf6;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0.5rem;
  }

  .aide-memoire-list li strong {
    color: #ffffff;
    font-weight: 600;
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }

  .form-input.error,
  .form-textarea.error {
    border-color: #FF4081;
  }

  .error-message {
    color: #FF4081;
    font-size: 12px;
    margin-top: 0.25rem;
  }

  .service-options {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-option {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    background: rgba(255, 255, 255, 0.05);
  }

  .service-option:hover {
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }

  .service-option.selected {
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.15);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
  }

  .service-icon {
  width: 50px;
  height: 50px;
  background: #8b5cf6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

  .service-icon i {
    color: white;
    font-size: 1.25rem;
  }

  .service-info {
    flex-grow: 1;
  }

  .service-name {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.25rem 0;
  }

  .service-description {
    color: #cec3c7;
    margin: 0;
  }

  .service-check {
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .service-option.selected .service-check {
    background: #8b5cf6;
    border-color: #8b5cf6;
    color: white;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #6c757d;
  }

  .checkbox-container input {
    margin-right: 0.75rem;
  }

  .form-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
  }

  .nav-btn {
    padding: 1rem 2rem;
    border: 2px solid #8b5cf6;
    border-radius: 25px;
    background: transparent;
    color: #8b5cf6;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-btn:hover:not(:disabled) {
    background: #8b5cf6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  }

  .nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .next-btn,
.submit-btn {
  background: #8b5cf6;
  color: white;
  border: none;
}

  .submit-btn {
  position: relative;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  padding: 1.25rem 2.5rem;
  border-radius: 30px;
  background: #8b5cf6;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
  min-width: 200px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

  .submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  .submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
  background: #7c3aed;
}

  .submit-btn:hover:not(:disabled)::before {
    left: 100%;
  }

  .submit-btn:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1);
  }

  .submit-btn span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
  }

  .submit-btn i {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  .submit-btn:hover:not(:disabled) i:not(.fa-spin) {
    transform: translateX(2px);
  }

  /* Loading state improvements */
  .submit-btn .fa-spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Pulse effect for loading */
  .submit-btn:disabled .fa-spinner {
    animation: spin 1s linear infinite, pulse 2s ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    100% { opacity: 0.7; }
  }

  .success-message {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  .success-content {
    text-align: center;
    max-width: 400px;
  }

  .success-icon {
  width: 80px;
  height: 80px;
  background: #00BEA3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
}

  .success-icon i {
    color: white;
    font-size: 2rem;
  }

  .success-content h3 {
    font-size: 28px;
    font-weight: 700;
    color: #8b5cf6;
    margin-bottom: 1rem;
  }

  .success-content p {
    color: #cec3c7;
    margin-bottom: 1rem;
  }

  .success-details {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 4px solid #8b5cf6;
  }

  .success-details p {
    margin: 0.5rem 0;
    font-size: 14px;
  }

  .success-details strong {
    color: #ffffff;
  }

  .reset-btn {
  padding: 1rem 2rem;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

  .reset-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    .contact-form-section {
      padding: 60px 0;
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .form-title {
      font-size: 32px;
    }
    
    .form-container {
      padding: 2rem;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .aide-memoire-list {
      grid-template-columns: 1fr;
    }
    
    .form-navigation {
      flex-direction: column;
    }
    
    .nav-btn,
    .submit-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .form-container {
      padding: 1.5rem;
    }
    
    .form-title {
      font-size: 28px;
    }
    
    .step-title {
      font-size: 20px;
    }
  }
  </style> 