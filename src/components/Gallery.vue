<template>
  <v-container>
    <div class="block galleryBlock">
      <h2 class="text-center">Nossas T-shirts</h2>
      <v-row dense>
        <v-col
          v-for="item in items"
          :key="item.id"
          :cols="item.flex"
        >
          <!-- TODO: quando clicar na imagem (card) expandir, tipo instagram -->
          <v-card class="cardBlock">
            <v-img
              :src="item.src"
              class="white--text align-end"
              height="250px"
            >
              <v-card-title id="galleryCardTitle" v-text="item.title">
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Gallery',
    methods: {
      randomColor(){
        const colors = ['#F0B6D790', '#F0E0C790', '#B99CF090', '#B99CF090', '#ADCFF090']
        let titleBackgroundColor = document.querySelectorAll('#galleryCardTitle')
        titleBackgroundColor.forEach((title) => {
          title.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        })   
      }
    },
    mounted: function(){
      this.randomColor()
    },
    // TODO: 
    // Essas imagens preciasm ser obtidas do servidor e não localmente
    data(){
      return{
        items: [
          {
            id: 1,
            src: require("../assets/images/img1.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
          {
            id: 2,
            src: require("../assets/images/img2.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
          {
            id: 3,
            src: require("../assets/images/img3.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
          {
            id: 4,
            src: require("../assets/images/img4.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
          {
            id: 5,
            src: require("../assets/images/img5.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
          {
            id: 6,
            src: require("../assets/images/img6.jpg"),
            title: "Lorem Ipsum",
            flex: 3,
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>