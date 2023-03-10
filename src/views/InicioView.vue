<template>
  
  <NavBar>
    <HelloWorld />
  </NavBar>
  <PieFooter />
</template>
    

<script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavBar from '../components/NavBar.vue';
  import HelloWorld from '@/components/HelloWorld.vue'
  import PieFooter from '../components/PieFooter.vue'
 

  
  export default defineComponent({
    name: 'InicioView',
  
    components: {
      NavBar,
      HelloWorld,
      PieFooter,
      
    
    },
  });
  </script>
  