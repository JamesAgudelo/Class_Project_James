<template>
    <NavBar>
      
        <div class="about">
    <h1>
      <p class="font-italic">Sofia 💅 y Angi 🐄 hicieron que Batman y Superman se peleen, marditas </p>
    </h1>
    <v-img
  :width="1400"
  aspect-ratio="16/9"
  cover
  src="https://images.hdqwalls.com/wallpapers/batman-v-superman-arts-h8.jpg"
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
      name: 'AboutUsView',
    
      components: {
        NavBar,
        PieFooter,
        
      },
    });
    </script>