<template>
  <v-app id="app">
     <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="blue lighten-3"
        class="pa-4"
        height=60
        elevation=1
      >
        <div>Guillaume Feller-Mary</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          active-class="bg-active"
          v-for="link in links"
          :key="link"
          :to="link.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title >{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
    color="blue lighten-3"
    height=60
    elevation=1
    flat	
    app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Guillaume's Portfolio</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: function():any {
    return {
      drawer: null,
      links: [
              {
                text: 'Salt Assistant',
                link: '/salt'
              },
              {
                text: 'Portfolio',
                link: '/portfolio'
              },
              {
                text: 'Wayback Finder',
                link: '/wayback'
              },
              {
                text: 'Reverse Tower Defense',
                link: '/rtd'
              },
              {
                text: '2D Survival',
                link: '/surv'
              },
            ]
    }
  }
});
</script>

<style>

body {
  font-family: Roboto, sans-serif
}

.bg-active {
  background-color: #95CCF9;
  opacity: 1;
}
</style>
