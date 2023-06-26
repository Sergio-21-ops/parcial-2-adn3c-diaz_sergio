<template>
    <v-sheet max-width="300" class="mx-auto">
<v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="form_data.titulo"
        label="Titulo de la noticia"
      ></v-text-field>

      <v-text-field
        v-model="form_data.autor"
        label="Autor"
      ></v-text-field>

      <v-text-field
        v-model="form_data.sinopsis"
        label="Sinopsis"
      ></v-text-field>

      <v-text-field
        v-model="form_data.descripcion"
        label="Descripcion"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="guardar(form_data)" value="Guardar">Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  
  <script>
    export default {
      name: 'PublicarComponente',
  
      data: function() {
        return {
			form_data:{
				titulo:"",
				autor:"",
				cuerpo:"",
				sinopsis:"",
			},
		verificar:true,
		arr:[]
    }}}

    
  </script>
  