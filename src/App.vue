<template>
  <v-app>
    <!-- TODO: transformar botões whatsapp e instagram em components? -->
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
      <!--TODO: Colocar links instagram e whatsapp -->
      <div class="text-center">
        <v-btn class="d-sm-none contactButton" style="margin-right:10px;" icon>
          <v-icon >mdi-instagram</v-icon>
        </v-btn>
        <v-btn class="d-sm-none contactButton" style="margin-left:10px;" icon>
            <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </div>
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

<style scoped>
  .contactButton{
    font-size:2rem; 
    margin-top:3px;
    margin-bottom: -30px;
    height:40px; 
    width:40px
  }
</style>
