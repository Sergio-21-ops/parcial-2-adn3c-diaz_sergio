<template>
  <v-app>
 
    <v-img
          :src="require('./assets/prenpublogo.png')"
          class="my-2"
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
      justify="space-around"
      >
        <v-btn
          color="black"
          class="white--text ma-5"
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
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.link"
              class="black--text text-decoration-none">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>


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
          { title: 'Noticias', link: '/noticias' },
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
