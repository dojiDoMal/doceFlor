<template>
  <v-container>
    <div class="block galleryBlock">
      <h2 class="text-center">Nossas T-shirts</h2>
      <v-row dense>
        <v-col
          v-for="item in items"
          :key="item.id"
          xs="12"
          sm="6"
          md="3"
        >
          <!-- TODO: quando clicar na imagem (card) expandir, tipo instagram -->
          <v-card class="cardBlock">
            <v-img 
              :src="'data:image/png;base64,'+item.src"
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
    updated: function(){
      this.randomColor()
    },
    data(){
      return{
        items: [],
      }
    },
    created(){
      this.$http.get("http://localhost:8000/")
        .then(res => res.json())
        .then(event => this.items = event.img, err => console.log(err))
    },
  }
</script>
