<template>
    <v-btn @click="link" icon>
        <v-icon id="socialIcon">mdi-{{icon}}</v-icon>
    </v-btn>
</template>

<script>

  export default {
    props:{
      socialIcon: {
        type: String,
        required: true
      },
      socialLink: {
        type: String
      }
    },
    name: 'Social',
    methods: {
      link: function(){
        window.open(this.socialLink, '_blank')
      }
    },
    data: function (){
      return {
        icon: this.socialIcon,
      }
    }
  }
</script>