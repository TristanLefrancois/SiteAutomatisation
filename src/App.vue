<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #1a1a1a;
  min-height: 100vh;
  width: 100%;
}

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
</style>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
