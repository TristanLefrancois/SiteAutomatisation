<template>
    <div id="accueil">
        <Background />
    </div>
    <div id="about">
        <About />
    </div>
    <div id="services">
        <NosServices />
    </div>
    <div id="technologies">
        <NosTechnologies />
    </div>
    <div id="contact">
        <ContactForm />
    </div>

</template>

<script setup>
import Background from '@/components/Accueil/Background.vue';
import About from '@/components/Accueil/About.vue';
import NosServices from '@/components/Accueil/NosServices.vue';
import ContactForm from '@/components/Accueil/ContactForm.vue'; 
import NosTechnologies from '@/components/Accueil/NosTechnologies.vue';  
</script>

<style scoped>
  #accueil {
  scroll-margin-top: 100px;
}

#about {
  scroll-margin-top: 100px;
}

#services {
  scroll-margin-top: 100px;
}

#technologies {
  scroll-margin-top: 100px;
}

#contact {
  scroll-margin-top: 100px;
}

html {
  scroll-behavior: smooth;
}
</style>