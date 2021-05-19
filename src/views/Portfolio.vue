<template>
  <Project
  name="PORTFOLIO"
  technologies="Vue.js, Vuetify"
  languages="HTML, CSS, Typescript"
  description="This very website, my portfolio."
  :links="['https://guifeller.github.io/']"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Portfolio',

    components: {
      Project,
    },
  })
</script>
