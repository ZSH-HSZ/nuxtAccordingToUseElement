<template>
  <section class="container">
    <logo />
    <el-button class="spacing" v-loading="loading" @click="loading=true">我是element-ui 的button</el-button>
    <el-button class="spacing" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-tooltip class="spacing" content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import { post, get } from '~/api/index'
  import axios from 'axios'
  export default {
    components: {
      Logo
    },
    async asyncData({
			store,
			route,
      userAgent,
      req
		}) {
      // const allData = await Promise.all([
      //   get('hotOpusList', req.headers.cookie, {}, {page: 25, index: route.query.index||1,tag: route.query.tag||'', timeFilter: route.query.date||'',sort: 'views', order: 'desc'})
      // ])
      // return {
      //   allData
      // }
    },
    data() {
      return {
        loading: false,
        dialogVisible: false
      }
    },
    mounted() {
      setTimeout(()=>{
        axios.get('/userLogin')
        .then(res=>{
          console.log(res)
        })
      }, 2000)
    },
  }

</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .spacing {
    margin-top: 30px;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
