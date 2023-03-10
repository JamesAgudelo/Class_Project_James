<template>
  
    <NavBar>
        <ContactUs />
    </NavBar>
    <PieFooter />
</template>



<script>
import { defineComponent } from 'vue';

// Components
import ContactUs from '../components/ContactUs.vue'
import NavBar from '../components/NavBar.vue'
import PieFooter from '../components/PieFooter.vue'


export default defineComponent({
  name: 'ContactUsView',

  components: {
    ContactUs,
    NavBar,
    PieFooter,
    
  },
});
</script>