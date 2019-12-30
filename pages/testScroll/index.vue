<template>
  <div>
    <div class="between test-scroll">
      <div>
        <div ref="clomus1" class="clomus-1">
          <div class="test-box" v-for="(item, index) in newArray1" :key="index"
            :style="`width: 200px; height: ${item.val}px`">
            200*{{item.val}}<br/>
            {{item.index}}
          </div>
        </div>
      </div>
      <div>
        <div ref="clomus2" class="clomus-2">
          <div class="test-box" v-for="(item, index) in newArray2" :key="index"
            :style="`width: 200px; height: ${item.val}px`">
            200*{{item.val}}<br/>
            {{item.index}}
          </div>
        </div>
      </div>
      <div>
        <div ref="clomus3" class="clomus-3">
          <div class="test-box" v-for="(item, index) in newArray3" :key="index"
            :style="`width: 200px; height: ${item.val}px`">
            200*{{item.val}}<br/>
            {{item.index}}
          </div>
        </div>
      </div>
      <div>
        <div ref="clomus4" class="clomus-4">
          <div class="test-box" v-for="(item, index) in newArray4" :key="index"
            :style="`width: 200px; height: ${item.val}px`">
            200*{{item.val}}<br/>
            {{item.index}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newArray1: [],
        newArray2: [],
        newArray3: [],
        newArray4: [],
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        let _this = this
        let newArray = [...new Array(20)].map(ele => {
          return Math.max((Math.random() * 400).toFixed(0), 100)
        })
        let index = 0
        let addTimeOut = () => {
          setTimeout(() => {
            if (index < 19) {
              addTimeOut()
              _this.addScroll({
                val: newArray[index],
                index
              })
            }
            index++
          }, 100);
        }
        addTimeOut()
      },
      addScroll(val) {
        let scrollHeight = [
          this.$refs.clomus1.clientHeight,
          this.$refs.clomus2.clientHeight,
          this.$refs.clomus3.clientHeight,
          this.$refs.clomus4.clientHeight,
        ]
        let min = Math.min.apply(null, scrollHeight)
        let minIndex = scrollHeight.indexOf(min)
        this.$set(this, `newArray${minIndex+1}`, this[`newArray${minIndex+1}`].concat([val]))
      }
    },
  }

</script>

<style lang="less" scoped>
  .test-scroll {
    width: 830px;

    .clomus-1,
    .clomus-2,
    .clomus-3,
    .clomus-4 {
      display: inline-block;
      width: 200px;
      text-align: center;
      line-height: 50px;

      .test-box {
        margin-bottom: 20px;
        background: lightblue;
        animation: goright 1s linear;
        font-size: 30px;
        color: #fff;
      }
    }
  }
  @keyframes goright {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
