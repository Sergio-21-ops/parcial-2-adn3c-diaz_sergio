<template>
  <v-sheet max-width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="form_data.titulo" label="Titulo de la noticia"></v-text-field>

      <v-text-field v-model="form_data.autor" label="Autor"></v-text-field>

      <v-text-field v-model="form_data.sinopsis" label="Sinopsis"></v-text-field>

      <v-text-field v-model="form_data.descripcion" label="Descripcion"></v-text-field>

      <v-select
      v-model="form_data.select"
      :items="items"
      label="Item"></v-select>
    
      <v-btn type="submit" block class="mt-2" @click="guardar(form_data)" value="Guardar">Enviar</v-btn>
    </v-form>
    
  </v-sheet>
</template>
  
<script>
export default {
  name: 'PublicarComponente',

  data: function () {
    return {
      form_data: {
        titulo: "",
        autor: "",
        cuerpo: "",
        select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      },
      verificar: true,
      arr: []
    }
  },
  methods: {
    guardar: function (form_data) {

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
      this.verificar = true
    },
  },
}


</script>
  