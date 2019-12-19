<template>
  <section class="container">
    <Logo :curValue.sync="curValue"></Logo>
  </section>
</template>

<script>
import Logo from '../components/Logo'  
export default  {
  components: {
    Logo,
  },
  data() {
    return {
      curValue: 1
    }
  },
}
</script>