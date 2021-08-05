<template>
  <v-app>
    <!-- TODO: colocar essa imagem da navbar via cdn (?) -->
    <v-app-bar
      app
      flat
      src="./assets/images/navbarbg.png"
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <Hero/>
      <Gallery/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default {
  name: 'App',

  components: {
    Header,
    Hero,
    Gallery,
  },

  data: () => ({
    //
  }),
};
</script>
