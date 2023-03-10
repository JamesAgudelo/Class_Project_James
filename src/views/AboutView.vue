<template>
  
  <NavBar>
    <div class="about">
    <h1>
      <p class="font-italic">Tenemos el privilegio de conocer a Superman </p>
    </h1>
    <v-img
  :width="1400"
  aspect-ratio="16/9"
  cover
  src="https://images3.alphacoders.com/112/1125200.jpg"
></v-img>
  </div>
  </NavBar>

  <PieFooter />

</template>


<script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavBar from '../components/NavBar.vue'
  import PieFooter from '../components/PieFooter.vue'

  
  export default defineComponent({
    name: 'AboutView',
  
    components: {
      NavBar,
      PieFooter
      
    },
  });
  </script>