<template>
  <v-app>
    <!-- TODO: colocar essa imagem da navbar via cdn (?) -->
    <v-app-bar
      app
      flat
      src="./assets/images/navbarbg.png"
      :hide-on-scroll=true
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <Hero/>
      <Gallery/>
    </v-main>
    <div class="block">
      <h2></h2>
    </div>
      <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Hero,
    Gallery,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
