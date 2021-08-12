<template>
  <v-container>
    <v-toolbar
      flat
      color="transparent"
    >
      <v-spacer class="d-flex d-sm-none"></v-spacer>
      
      <v-toolbar-title>
        <!-- TODO: Trocar esse ícone pelo da doce flor --> 
        <v-icon color="#1d2327">
          mdi-flower-outline
        </v-icon> 
        <span style="text-shadow:0 0 black;">
          Doce Flor
        </span>
      </v-toolbar-title>

      <v-spacer class="d-flex d-sm-none"></v-spacer>
      <v-spacer class="hidden-xs-only"></v-spacer>

      <v-toolbar-items>
        <Social
          :social-link="event.instagramLink"
          class="hidden-xs-only"
          social-icon="instagram"
        />
        <Social
          :social-link="event.whatsappLink"
          class="hidden-xs-only"
          social-icon="whatsapp"
        />
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  import Social from './Social'

  export default {
    name: 'Header',
    components: {
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
  }
</script>

<style scoped>

  /*
  * TODO:
  * Colocar os arquivos de fonte também hospedados no servidor (?)
  */
  @font-face {
    font-family: "Mr-Mogollon";
    src: url(../assets/fonts/Mr-Mogollon.ttf);
  }

  .v-toolbar__title{
    font-family: "Mr-Mogollon";
  }

</style>