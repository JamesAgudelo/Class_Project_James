<template>
    <NavBar>
        <div class="help">
    <h1>
      <p class="text-center ma-5 pa-3"
      style="color: teal;">
         ¿Tienes problemas, dudas, incertidumbres? </p>
    </h1>
    </div>
        <FormHelp />

    </NavBar>
    <PieFooter />
</template>
  

  <script>
    import { defineComponent } from 'vue';
    
    // Components
    import NavBar from '../components/NavBar.vue';
    import FormHelp from '../components/FormHelp.vue'
    import PieFooter from '../components/PieFooter.vue'
   
  
    
    export default defineComponent({
      name: 'HelpView',
    
      components: {
        NavBar,
        FormHelp,
        PieFooter,
        
      
      },
    });
    </script>
    