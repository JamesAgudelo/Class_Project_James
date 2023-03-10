<template>
    <NavBar>
        <div>
        <h1> Si, tururururu ruuuuuu</h1>
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
  name: 'SiUwUView',

  components: {
    NavBar,
    PieFooter,
    
  },
});
</script>