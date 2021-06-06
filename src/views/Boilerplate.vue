<template>
  <Project
  name="BLOG BOILERPLATE"
  technologies="MySQL"
  languages="PHP, SQL"
  description="A boilerplate that can be used to power any blogging system. Includes a REST Api and an authentication system. Done in pure php, without using any framework."
  :links="['https://github.com/guifeller/Blog-Boilerplate']"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project from '../components/Project.vue'

  export default Vue.extend({
    name: 'Boilerplate',

    components: {
      Project,
    },
  })
</script>
