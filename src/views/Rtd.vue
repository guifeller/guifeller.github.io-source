<template>
  <Project
  name="REVERSE TOWER DEFENSE"
  technologies="Unity"
  languages="C#"
  description="A reverse tower-defense where the player controls the monsters attacking the town."
  :links="['https://github.com/guifeller/Tower-Attack']"
  plur1=false
  plur2=false
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Rtd',

    components: {
      Project,
    },
  })
</script>
