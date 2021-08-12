<template>
  <v-container>
    <v-footer
    padless
    style="opacity:80%"
  >
    <v-card
      dark
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal lighten-3">
        <strong style="color:black" class="subheading hidden-xs-only">Nos siga no Instagram!</strong>

        <v-spacer class="hidden-xs-only"></v-spacer>

        <v-spacer class="d-flex d-sm-none"></v-spacer>

        <Social
          :social-link="event.instagramLink"
          class="mx-4"
          social-icon="instagram"
        />
        <Social
          :social-link="event.whatsappLink"
          class="mx-4"
          social-icon="whatsapp"
        />

        <v-spacer class="d-flex d-sm-none"></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        Copyright © 2021 — <strong>Doce Flor</strong> T-shirts
      </v-card-text>
    </v-card>
  </v-footer>
    
  </v-container>
</template>

<script>
  import Social from './Social'
  export default {
    name: 'Footer',
    components: {
      Social,
    },
    data: () => ({
      event: {}
    }),
    created(){
    this.$http.get("http://localhost:8000/")
      .then(res => res.json())
      .then(event => this.event = event, err => console.log(err))
    },
  }
</script>
