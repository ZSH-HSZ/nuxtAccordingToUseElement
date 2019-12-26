<template>
  <div>
    <div class="VueToNuxtLogo">
    <button @click="writeNumber('1')">+</button>
    <input
      v-model="inPutString"
    >
    <button @click="writeNumber('-1')">-</button>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inPutString: ''
      }
    },
    mounted () {
      this.inPutString = this.propsData;
    },
    watch: {
      inPutString(newValue, oldValue) {
        this.$emit("update:propsData", newValue)
      }
    },
    methods: {
      name() {
        
      }
    },
  }
</script>


<style >
  .VueToNuxtLogo {
    display: flex;
  }
</style>