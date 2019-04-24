<template>
  <div>
    <div v-for="(item, index) in allData.obj.content" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    
    async asyncData({req}) {
      let road = req.url.split('/')
      let index = road[road.length-2]
      // 接口为他人提供，嗝屁自己换
      const axiosRoad = `https://www.181.com/aps/pc/newhouse/list?pageNumber=${index}&pageSize=10`
      const allData = await Promise.all([
        axios.get(axiosRoad)
      ])
      return {
        allData: allData[0].data
      }
    },
    mounted() {
      console.log(this.allData)
    }
  }
</script>

<style scoped>

</style>