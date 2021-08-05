<template>
  <v-app>
    <v-app-bar
      app
      flat
      src="https://res.cloudinary.com/dmuoxjozq/image/upload/v1628178318/template_fw6j4b.png"
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <Hero/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'

export default {
  name: 'App',

  components: {
    Header,
    Hero,
  },

  data: () => ({
    //
  }),
};
</script>
