<template>
  
  <NavBar>
    <loremImp />
  </NavBar>

  <PieFooter />
  </template>
    
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import loremImp from '../components/loremImp.vue';
  import NavBar from '../components/NavBar.vue'
  import PieFooter from '../components/PieFooter.vue'

  
  export default defineComponent({
    name: 'InfoView',
  
    components: {
      loremImp,
      NavBar,
      PieFooter
      
    },
  });
  </script>