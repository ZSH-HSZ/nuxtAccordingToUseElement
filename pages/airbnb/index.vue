<template>
  <div id="svgContainer">
    
  </div>
</template>

<script>
  import bodymovin from 'lottie-web'
  export default {
    mounted () {
      var svgContainer = document.getElementById('svgContainer');
      var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
      });;
    },
  }
</script>

<style lang="less" scoped>

</style>