<template>
  <section class="container">
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入内容"
      v-model="inputValue">
    </el-input>
    <br>
    <div>
      <div class="flex item">
        <div class="tips">发音人</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="flex item">
        <div class="tips">音频编码</div>
        <el-select v-model="aue" placeholder="请选择">
          <el-option
            v-for="item in aueOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="show-button">
        <el-button @click="show()">生成</el-button>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '../components/Logo'
  const APPID = '5e031c7b'
  const API_SECRET = '6314edf5385bcad2c3be742c00750e7b'
  const API_KEY = 'efb5a25e1276f53f8d0f3f6db86143f0'
  export default {
    components: {
      Logo,
    },
    data() {
      return {
        inputValue: '',
        websocket: '',
        audio: {},
        value: 'xiaoyan',
        aue: 'raw',

        options: [
          {
            value: 'xiaoyan',
            label: '讯飞小燕'
          },
          {
            value: 'aisjiuxu',
            label: '讯飞许久'
          },
          {
            value: 'aisxping',
            label: '讯飞小萍'
          },
          {
            value: 'aisjinger',
            label: '讯飞小婧'
          },
          {
            value: 'aisbabyxu',
            label: '讯飞许小宝'
          },
          {
            value: 'x_yifeng',
            label: '讯飞一峰'
          },
          {
            value: 'x_xiaoyan',
            label: '讯飞晓燕'
          },
          {
            value: 'x_xiaofang',
            label: '讯飞芳芳'
          },
          {
            value: 'x_xiaofeng',
            label: '讯飞晓峰'
          },
          {
            value: 'x_xiaomeng',
            label: '讯飞小梦'
          },
        ],
        aueOptions: [
          {
            label: '未压缩的pcm',
            value: 'raw'
          },
          {
            label: '压缩',
            value: 'speex'
          },
        ],
      }
    },
    mounted() {},
    methods: {
      sendMessage() {
        let params = {
          "common": {
            "app_id": APPID
          },
          "business": {
            'ent': 'aisound',
            'aue': 'raw',
            'auf': 'audio/L16;rate=16000',
            'vcn': this.value,
            //'bgs': 1,
            'tte': 'UTF8'
          },
          "data": {
            "status": 2,
            "text": Base64.encode(this.inputValue)
          }
        }
        this.websocket.send(JSON.stringify(params))
      },
      show() {
        this.getWebsocketUrl()
          .then(res => {
            this.websocket = new WebSocket(res)
            this.websocket.onopen = (e) => {
              this.sendMessage()
            }
            this.websocket.onmessage = (e) => {
              // console.log(e)
              let data = JSON.parse(e.data)
              if (data.data && data.data.status === 2) {
                this.audio = data.data
                this.setAudio()
              }
            }
            this.websocket.onerror = (e) => {
              console.log(e)
            }
            this.websocket.onclose = (e) => {
              console.log(e)
            }
          })
      },
      setAudio() {
        function base64ToBlob(base64, fileType) {
          let typeHeader = 'data:application/' + fileType + ';base64,'; // 定义base64 头部文件类型
          let audioSrc = typeHeader + base64; // 拼接最终的base64
          let arr = audioSrc.split(',');
          let array = arr[0].match(/:(.*?);/);
          let mime = (array && array.length > 1 ? array[1] : type) || type;
          // 去掉url的头，并转化为byte
          let bytes = window.atob(arr[1]);
          // 处理异常,将ascii码小于0的转换为大于0
          let ab = new ArrayBuffer(bytes.length);
          // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
          let ia = new Uint8Array(ab);
          for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
          }
          return new Blob([ab], {
            type: mime
          });
        }
        console.log('check audio')
        this.$message.success('生成成功')
        let audioBlob = base64ToBlob(this.audio.audio, "mp3");
        let audio = document.getElementById("audioId");
        audio.src = window.URL.createObjectURL(audioBlob);
        audio.addEventListener("canplay", () => {
          window.URL.revokeObjectURL(audio.src);
        });
      },
      getWebsocketUrl() {
        return new Promise((resolve, reject) => {
          var apiKey = API_KEY
          var apiSecret = API_SECRET
          var url = 'ws://tts-api.xfyun.cn/v2/tts'
          var host = location.host
          var date = new Date().toGMTString()
          var algorithm = 'hmac-sha256'
          var headers = 'host date request-line'
          var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`
          var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
          var signature = CryptoJS.enc.Base64.stringify(signatureSha)
          var authorizationOrigin =
            `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
          var authorization = btoa(authorizationOrigin)
          url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
          resolve(url)
        })
      }
    },
  }

</script>

<style>
  @import './index.css';
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .tips {
    line-height: 40px;
    width: 100px;
  }
  .item {
    margin-bottom: 20px;
  }
  .show-button {
    width: 295px;
  }
  .el-button {
    width: 295px;
  }
</style>
