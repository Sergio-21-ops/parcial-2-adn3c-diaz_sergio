<template>
    <v-sheet max-width="300" class="mx-auto">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        :rules="rules"
        label="User name"
      ></v-text-field>

      <v-btn
        :loading="loading"
        type="submit"
        block
        class="mt-2"
        text="Submit"
      ></v-btn>
    </v-form>
  </v-sheet>
  </template>
  
  <script>
    export default {
      name: 'HelloWorld',
  
      data: () => ({
        tips: [
          {
                      title: "Alcance", 
                      img: require('../assets/alcance.jpg'), 
                      alt:"Imagen de alcance",
                      texto:"Nuestra aplicacion permite relacionar su contenido a un largo nivel de difusion junto con el de otros usuarios, lo cual permite subir su calificacion y facilitar su reputacion ",
                  },
                  {
            title: "Experiencia", 
                      img: require('../assets/experiencia.jpg'), 
                      alt:"Imagen de experiencia",
                      texto:"No importa su nivel de conocimiento en la aplicacion o en el ambiente periodistico, la app le permite ir evolucionando su contenido en base a sugerencias a nivel de lectura u ortografico",
                  },
                  {
            title: "Desarrollo", 
                      img: require('../assets/desarrollo.jpg'), 
                      alt:"Imagen desarrollo",
                      texto:"Pese a estar poco tiempo en play store, la app tiende a mejorar cada cierto tiempo para facilitar la fluidez de la usabilidad",
                  }
              ],
      }),
    }
  </script>
  