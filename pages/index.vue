<template>
  <section class="container">
    <nuxt-link to="/test">3333333333333333</nuxt-link>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    
    components: {
    },
    data() {
      return {
       
      }
    },
    mounted() {
      console.log(this.$store.state)
      setTimeout(() => {
        console.log(this.$store.state)
      }, 2000);
    },
    methods: {
      
    },
  }

</script>

