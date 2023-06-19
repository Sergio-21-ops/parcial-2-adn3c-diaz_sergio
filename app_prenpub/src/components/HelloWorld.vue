<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/prenpublogo.png')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenidos a Prenpub
        </h1>

        <p class="text-left mb-4">
          Te damos la bienvenida a nuestra aplicacion dedicada exclusivamente para quienes buscan proyectar su propio espacio abocado al publico para difundir y compartir sus opiniones e intereses , dedicado especificamente a aquel quien siente que merece ser leido entre mas usuarios.

Prensapub nace en 2020 despues de la fusion entre la productora Prensa entre nos y publico para todos con el objetivo de llegar a cada vez mas personas interesadas en este proyecto, si bien somos relativamente nuevos en el ambiente nuestras ideas en menos de 4 años logramos llegar a una audiencia bastante amplia en variedad de edad y centrada en la diversidad de categorias distinguidas entre entrevistas, editoriales, opiniones y columnas .

Nuestro staff esta compuesto por un grupo de personas jovenes, algunos estudiantes de periodismo, otros en las puertas de su recibimiento en la carrera ,otros con la carrera consolidada y al frente de una inmejorable oportunidad para crecer con el tiempo, a todos estos los une la conjugacion de las dos palabras en comun que dieron origen a esta idea. Tenemos a su disposición Nuestros contenidos se rigen con una amplia variedad de temas y le es util a quien quiera hacer sus primeras armas en el mundo del periodismo o bien para otro publico el cual simplementa quiera dar a conocer su voz en este ambiente.
        </p>

        <h2 class="display-2 font-weight-bold mb-3">
          Por que descargarse nuestra aplicacion
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
