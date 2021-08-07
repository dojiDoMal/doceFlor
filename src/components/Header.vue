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
      <!-- TODO: Colocar os links correspondentes -->
      <v-toolbar-items>
        <v-btn class="hidden-xs-only" icon>
          <v-icon style="font-size:2rem; height:40px; width:40px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn class='hidden-xs-only' icon>
          <v-icon style="font-size:2rem; height:40px; width:40px">mdi-whatsapp</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
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