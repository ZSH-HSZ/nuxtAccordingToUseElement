<template>
  <div>
    <div id="dplayer"></div>
  </div>
</template>

<script>
  const videojs = require('video.js')
  export default {
    head: {
      script: [
        // { src: '/js/DPlayer.min.js' },
        // { src: '/js/hls.js' },
      ]
    },
    mounted() {
      window.videojs = videojs;
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/js/hls.js';
      head.appendChild(script);
      var script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = '/js/DPlayer.min.js';
      head.appendChild(script2);
      
    setTimeout(()=>{
        const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
          url: 'http://tx-pclivemate.hlspull.yximgs.com/4xrUHv7p_qc_gn900m.m3u8',
          type: 'hls'
        }
      });
    }, 1000)
      
    }
  }

</script>

<style scoped>

</style>
