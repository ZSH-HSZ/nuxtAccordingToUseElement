<template>
  <div class="VueToNuxtLogo">
    <input type="text" v-model="curValue">
  </div>
</template>


<script>
export default {
  
  props: {
    curValue: {
      type: Number,
    },
  },
  mounted () {
    console.log(this.curValue);
    setTimeout(()=>{
      this.$emit('update:curValue', 100)
      setTimeout(()=>{
        console.log(this.curValue)
      }, 100)
    }, 3000)
  },
}
</script>
