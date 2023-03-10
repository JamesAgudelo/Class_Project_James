<template>
  
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!-- Debe tener algo-->

     <!--Agregar botones con Ruta-->
      <v-btn
      block 
      v-for="(item,index) in rutas" :key="index"
      color="teal ma-auto pa-auto my-2 px-6" 
      variant="tonal"
      class="d-block"
      @click="url(item.ruta)">

      <span>{{ item.nombre }}</span>
      </v-btn>

      <!-- <v-btn color="primary ma-auto my-2 px-5"
      variant="tonal"
      class="d-block"
      @click="url('/about')">
      <span>about</span>
      </v-btn> -->

    </v-navigation-drawer>

    <v-app-bar color="teal" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >James Oquendo Aplication´s</v-toolbar-title>

      <router-link to="/Login" style="text-decoration: none;">
        <v-btn variant="outlined" class="bg-teal text-white ma-2">
          
    <span> Login </span>
    </v-btn>
      </router-link>  
      
    </v-app-bar>

    <v-main>
      <slot> </slot>
      
  
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({
        drawer: false,
        rutas: [
            {nombre: 'home', ruta: '/'},
            {nombre: 'about', ruta: '/about'},
            {nombre: 'help', ruta: '/help'},
            {nombre: 'info', ruta: '/info'},
            {nombre: 'about us', ruta: '/quienes somos'},
            {nombre: 'contact us', ruta: '/Contactanos'}

        ]
    }),
    methods: {
        url(ruta){
            this.$router.push(ruta)
        }
    }
  }
</script>