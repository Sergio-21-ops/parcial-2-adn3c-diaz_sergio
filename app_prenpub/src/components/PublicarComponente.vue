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
  