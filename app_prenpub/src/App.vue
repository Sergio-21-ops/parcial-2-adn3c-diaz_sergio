<template>
  <v-app>
 
    <v-img
          :src="require('./assets/prenpublogo.png')"
          class="my-3"
          contain
          height="300"
        />
        <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="black"
          dark
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>


  <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/ver">Noticias</router-link> |
  </nav>
  <v-main>
      <router-view/>
  </v-main>

    <v-footer class="v-footer black">
    <v-row justify="center" no-gutters>
      <v-col class="white--text text-center mt-4" cols="12">
        <p><strong>Sergio Diaz 2 Parcial 3ADMTN</strong></p>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
        items: [
          { title: 'Home', link: '/' },
          { title: 'Noticias', link: '/ver' },
        ],
  }),
};
</script>
<style>
body {
    min-height: 100vh;
    background: #e5e5e5;
}


</style>
