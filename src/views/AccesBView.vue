<template>
  
    <NavBar>
        <div class="help">
    <h1>
      <p class="text-center ma-5 pa-3"
      style="color: teal;">
         Registrate </p>
    </h1>
    </div>
        <AccesB />
    </NavBar>

<PieFooter />
</template>


<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import AccesB from '../components/AccessB.vue'
import PieFooter from '../components/PieFooter.vue'



export default defineComponent({
  name: 'AccesBView',

  components: {
    NavBar,
    AccesB,
    PieFooter,
    
  
  },
});
</script>
