<template>
    <v-container>
      <v-row class="text-center">
  
        <v-col class="mb-4">
				<h2 class="text-center">Noticias publicadas</h2>
                <p>{{sin_datos}}</p>


                <v-card
    class="mx-auto my-12"
    v-for="item in local"
    :key="item.titulo"
    max-width="374"
  >
  <v-btn class="X" @click="borrar(item)">X</v-btn>       
    <v-card-title>{{item.titulo}}</v-card-title>

    <v-card-subtitle>{{item.autor}}</v-card-subtitle>
    <v-card-text>{{item.sinopsis}}</v-card-text>        
    <v-card-text>{{item.descripcion}}</v-card-text>

                  
            
                
        </v-card>

        <v-btn block @click="ver()" value="Ver">
                    Publicar noticia</v-btn>

        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'VerComponente',
  
      data:function(){
			return {
				local:[],
				sin_datos: ""
			}
	},
    mounted:function(){
		console.log("se monto")
		this.ver_local();
	},
	destroyed: function(){
			console.log("se destruyo la instancia")
	},
	methods:{
		ver_local:function(){
			
		if(localStorage.dato){
		this.local=JSON.parse(localStorage.getItem("dato"))	
				
		}else{
	
		this.sin_datos = "No hay noticias publicadas , se el primero";
}
		console.log( this.$route)
	},
	borrar:function(item){
		
		if(!localStorage.dato){
			this.sin_datos = "La noticia fue eliminada con exito";	
					
			}else{
		
				this.sin_datos = ""
	}
	this.local.splice(item,1)
	this.sin_datos = "La noticia fue eliminada con exito"		
	this.item=JSON.stringify(localStorage.removeItem("dato"))	
	},
	ver:function(){
			
		this.$router.push('/publicar');
		console.log( this.$route)
	}


	}
    }
  </script>
  <style>
.X {
  color: #fff;
  float: right;
    background: black;
    height: 2em;
    top: 10px;
    width: 2em;
    font-weight: bold;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 1em;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
}
</style>