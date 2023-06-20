<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="text-center my-5">Bienvenidos a Prenpub</h1>
  <p class="text-left">Te damos la bienvenida a nuestra aplicacion dedicada exclusivamente para quienes buscan proyectar su propio espacio abocado al publico para difundir y compartir sus opiniones e intereses , dedicado especificamente a aquel quien siente que merece ser leido entre mas usuarios.</p>
  <p class="text-left">Prensapub nace en 2020 despues de la fusion entre la productora Prensa entre nos y publico para todos  con el objetivo de llegar a cada vez mas personas interesadas en este proyecto, si bien somos relativamente nuevos en el ambiente nuestras ideas en menos de 4 años logramos llegar a una audiencia bastante amplia en variedad de edad y centrada en la diversidad de categorias distinguidas entre entrevistas, editoriales, opiniones y columnas  .</p>	
  <p class="text-left">Nuestro staff esta compuesto por un grupo de personas jovenes, algunos estudiantes de periodismo, otros en las puertas de su recibimiento en la carrera ,otros con la carrera consolidada y al frente de una inmejorable oportunidad para crecer con el tiempo,  a todos estos los une la conjugacion de las dos palabras en comun que dieron origen a esta idea. Tenemos a su disposición Nuestros contenidos se rigen con una amplia variedad de temas y le es util a quien quiera hacer sus primeras armas en el mundo del periodismo o bien para otro publico el cual simplementa quiera dar a conocer su voz en este ambiente.</p>
  <h2 class="text-center my-5">Por que descargarse nuestra aplicacion</h2>
        
<v-list>
  <v-list-item
    v-for="item in tips"
    :key="item.title"
    :title="item.title"
    :src="item.img"
  >
  <img class="col" v-bind:src="item.img" v-bind:alt="item.alt"/>
  <p>{{item.texto}} </p>
  
</v-list-item>
</v-list>

      </v-col>
    </v-row>
  </v-container>
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
