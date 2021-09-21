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
        :src="'data:image/png;base64,'+item.src"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class='image-title hidden-xs-only'>
              {{ item.text }}
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    data(){
      return{
        items: [],
      }
    },
    created(){
      this.$http.get(process.env.VUE_APP_SERVER_BASE_URL + "carousel")
        .then(res => res.json())
        .then(event => this.items = event.img, err => console.log(err))
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