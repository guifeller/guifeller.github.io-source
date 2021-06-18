<template>
  <Project
  name="SALT"
  technologies="Node.js, Express, Mongodb, Socket.io, Passport, Electron, NLTK"
  languages="HTML, CSS, Javascript, Python"
  description="Salt is a voice-controlled, modular assistant using speech recognition and natural language processing. Salt can understand the English language, manage / authentify multiple users with various levels of authorization, and lets the user add their own scripts to extend its functionalities."
  :links="['https://github.com/guifeller/Salt-Client', 'https://github.com/guifeller/Salt-Server', 'https://github.com/guifeller/Salt-Analyzer', 'https://github.com/guifeller/Salt-Admin']"
  :linksName="['Check out the client\'s code', 'Check out the server\'s code', 'Check out the parser\'s code', 'Check out the console\'s code']"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Salt',

    components: {
      Project,
    },
  })
</script>
