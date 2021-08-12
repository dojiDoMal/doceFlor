<template>
  <v-app>
    <!-- TODO: ver possibilidade de criar um componente pra essa app-bar  -->
    <v-app-bar
      app
      flat
      :src="'data:image/png;base64,'+event.navbarImage"
      :hide-on-scroll=true
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <Hero/>
      <div class="text-center">
        <Social
          :social-link="event.instagramLink"
          class="mr-10 d-sm-none contactButton"
          social-icon="instagram"
        />
        <Social
          :social-link="event.whatsappLink"
          class="ml-10 d-sm-none contactButton"
          social-icon="whatsapp"
        />
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
import Social from './components/Social'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Gallery,
    Footer,
    Social,
  },
  data: () => ({
    event: {},
  }),
  created(){
    this.$http.get("http://localhost:8000/")
      .then(res => res.json())
      .then(event => this.event = event, err => console.log(err))
  },
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
