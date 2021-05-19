<template>
  <Project
  name="WAYBACK FINDER"
  technologies="Wayback Machine API"
  languages="HTML, Javascript"
  description="A Google Chrome extension that allows you to easily find and store web pages on the Wayback Machine."
  :links="['https://github.com/guifeller/Wayback-Finder']"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Wayback',

    components: {
      Project,
    },
  })
</script>
