<template>
  <div class="heroBlock">
    <v-carousel
      cycle 
      hide-delimiters
      height="400"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
      :show-arrows-on-hover=true
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class='image-title hidden-xs-only'>
              {{ item.title }}
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    data () {
      return {
        // TODO:
        // Deixar essas imagens em um banco de dados ou no cloudinary,
        // pra facilitar alterações depois
        items: [
          {
            src: require("../assets/images/doce1.jpg"),
            title: "Mulher Nordestina",
          },
          {
            src: require("../assets/images/doce2.jpg"),
            title: "Arranjo Floral",
          },
          {
            src: require("../assets/images/doce3.jpg"),
            title: "Deixe o Amor Crescer",
          },
          {
            src: require("../assets/images/doce4.jpg"),
            title: "O Sol e o Mar",
          },
          {
            src: require("../assets/images/doce5.jpg"),
            title: "Coleção Floresça",
          },
        ],
      }
    },
  }
</script>

<style scoped>
  
  /*
  * TODO:
  * Colocar os arquivos de fonte também hospedados no servidor (?)
  */
  @font-face{
    font-family: "Paper-Flowers";
    src: url(../assets/fonts/Paper-Flowers.otf);
  }

  .heroBlock .image-title{
    font-family: "Paper-Flowers";
    font-weight: 500;
    font-size: 4.5rem;
    letter-spacing: .3rem;
    color: white;
  }

</style>