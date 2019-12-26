<template>
  <div class="VueToNuxtLogo">
    <button @click="writeNumber('1')">+</button>
    <input
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    >
    <button @click="writeNumber('-1')">-</button>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    writeNumber(val) {
      this.$emit('input', String(Number(this.value)+Number(val)))
    }
  },
}
</script>

<style >
  .VueToNuxtLogo {
    display: flex;
  }
</style>