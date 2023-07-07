<template>
   <v-container>
  <v-sheet max-width="400" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="form_data.titulo" label="Titulo de la noticia"></v-text-field>

      <v-text-field v-model="form_data.autor" label="Autor"></v-text-field>

      <v-text-field v-model="form_data.sinopsis" label="Sinopsis"></v-text-field>

      <v-text-field v-model="form_data.descripcion" label="Descripcion"></v-text-field>

      <v-select
          v-model="form_data.seleccion"
          :items="items"
          label="Seleccion"
        ></v-select>

      <v-btn type="submit" block class="mt-2" @click="guardar(form_data)" value="Guardar">Enviar</v-btn>
    </v-form>

  <v-row :class="verificar ? 'classBien' : 'classError'">
    <v-dialog
      v-model="dialog"
      max-width="290"      
    >
      <v-card>
        <v-btn
            color="black darken-1"
            class="float-right"
            text
            @click="cerrar"
          >
            X
          </v-btn>
        <v-card-text>
          Llene todos los espacios para continuar.
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-row>
  </v-sheet>
</v-container>
</template>
  
<script>
export default {
  name: 'PublicarComponente',

  data: function () {
    return {
      form_data: {
        titulo: "",
        autor: "",
        sinopsis: "",
        descripcion: "",
        seleccion: null,
      },
      items: ['Drama', 'Deportes', 'Sociedad', 'Cine', 'Otros'],
      verificar: true,
      dialog: false,
      arr: []
    }
  },
  methods: {
    guardar: function (form_data) {

      this.dialog = true
      if (this.form_data.titulo == "") {
        this.verificar = false
        return
      }

      if (this.form_data.autor == "") {
        this.verificar = false
        return
      }

      if (this.form_data.sinopsis == "") {
        this.verificar = false
        return
      }

      if (this.form_data.descripcion == "") {
        this.verificar = false
        return
      }
      if (!localStorage.dato) {
        this.arr = []
      } else {
        this.arr = JSON.parse(localStorage.getItem("dato"))
      }
      this.arr.push(form_data)

      localStorage.setItem("dato", JSON.stringify(this.arr))

      this.arr;
      this.$router.push('/ver');
    },
    cerrar: function () {
      this.dialog = false
      this.verificar = true
    },
  },
}


</script>
<style>
.v-sheet.v-card{
  padding: 1em;
}	
.classBien{color:green ;display:none}
.classError{color:red;
  display: none;
}
		
.modalDialog {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	opacity:1;
	transition: opacity 400ms ease-in;
	pointer-events: none;
}
.modalDialog:target {
	opacity:1;
	pointer-events: auto;
}
.modalDialog > div {
	width: 400px;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;
transition: opacity 400ms ease-in;
}
</style>
  