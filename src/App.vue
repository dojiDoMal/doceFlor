<template>
  <v-app>
    <v-app-bar
      app
      dense
      flat
      src="https://res.cloudinary.com/dmuoxjozq/image/upload/v1628178318/template_fw6j4b.png"
    >
      <Header/>
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
