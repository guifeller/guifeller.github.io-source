<template>
  <Project
  name="2D SURVIVAL"
  technologies="Unity"
  languages="C#"
  description="A 2d survival game. Includes building and ressource management elements."
  :links="['https://github.com/guifeller/2D-Survival']"
  plur1=false
  plur2=false
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Surv',

    components: {
      Project,
    },
  })
</script>
