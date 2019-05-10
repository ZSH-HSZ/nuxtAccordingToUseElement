<template>
  <section class="container">
    <logo />
    <!-- <no-ssr>
      <v-select v-model="selected" :options="['foo','bar']"></v-select>
    </no-ssr> -->
    <el-select v-model="value" placeholder="请选择" size='mini'>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div @contextmenu="testRightClock">fsdafasdfasdfsdaf</div>
    <el-button class="spacing" v-loading="loading" @click="loading=true">我是element-ui 的button
    </el-button>
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
    <nuxt-link to="/linking">链接</nuxt-link>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {
    post,
    get
  } from '~/api/index'
  import axios from 'axios'
  import {
    component as VueContextMenu
  } from '@xunlei/vue-context-menu'
  export default {
    head() {
      return {
        title: 'test11111'
      }
    },
    components: {
      Logo,
      'vue-context-menu': VueContextMenu
    },
    async asyncData({
      store,
      route,
      userAgent,
      req
    }) {
      // 验证cookie
      console.log(req.headers.cookie)
      // const allData = await Promise.all([
      //   get('users'),
      //   get('getIndex')
      // ])
      // return {
      //   allData
      // }
    },
    data() {
      return {
        loading: false,
        dialogVisible: false,
        selected: 'foo',
        contextMenuTarget: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    mounted() {
      console.log(this.allData)
      // axios.get('/userLogin')
    },
    methods: {
      testRightClock(val) {
        console.log(val)
      }
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
