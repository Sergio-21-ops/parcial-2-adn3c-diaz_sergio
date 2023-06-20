<template>
  <v-app>
    <v-img
          :src="require('./assets/prenpublogo.png')"
          class="my-3"
          contain
          height="300"
        />
        <v-row justify="space-around">
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="text"
      :rounded="rounded"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          :color="colors[index]"
          class="white--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
          {{ text }} Radius
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item"
          link
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>


    <nav class="nav nav-pills nav-fill">
    <ul :class="{barraNav}">
    <li class="nav-item"><router-link to="/" >Home</router-link></li>   
    <li class="nav-item"><router-link to="/ver">Noticias </router-link></li>
    </ul>
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
    //
  }),
};
</script>
<style>

</style>
