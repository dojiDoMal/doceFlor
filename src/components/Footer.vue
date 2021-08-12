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
        <v-btn
          color="black"
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <!-- TODO: Colocar links nos botões instagram e whatsapp -->
          <v-icon class="footer" size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
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
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-instagram',
        'mdi-whatsapp',
      ],
    }),
  }
</script>
