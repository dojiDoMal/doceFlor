<template>
  <v-container>
    <v-toolbar
      flat
      color="transparent"
    >
      <v-toolbar-title>
        <!-- TODO: Trocar esse ícone pelo da doce flor --> 
        <v-icon color="#1d2327">
          mdi-flower-outline
        </v-icon> 
        <span style="text-shadow:0 0 black;">
          Doce Flor
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- TODO: Colocar os links correspondentes -->
      <v-toolbar-items>
        <v-btn icon>
          <v-icon style="font-size:2rem; height:40px; width:40px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon>
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

  @font-face {
  font-family: "Mr-Mogollon";
  /*src: url(../assets/fonts/Mr-Mogollon.ttf.eot);
  src: url(../assets/fonts/Mr-Mogollon.ttf.woff) format("woff");*/
  src: url(../assets/fonts/Mr-Mogollon.ttf);
  /*src: url(../assets/fonts/Mr-Mogollon.ttf.svg) format("svg");*/
}

  .v-toolbar__title{
    font-family: "Mr-Mogollon";
  }

  .mdi-instagram {
    background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mdi-whatsapp {
    background: rgb(0, 182, 91);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color:transparent;
    /*-webkit-text-stroke: 1px;
    -webkit-text-stroke-color: white;*/
}



</style>