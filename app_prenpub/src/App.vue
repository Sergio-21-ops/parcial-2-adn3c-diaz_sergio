<template>
  <v-app>
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
