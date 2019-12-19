<template>
  <div class="home" style="height: 100%">
    <van-button @click="goUser" icon="orders-o" color="linear-gradient(to right, #4bb0ff, #6149f6)"></van-button>
    <div class="iframeDiv">
      <iframe id="iframe" src="https://h5.egaming1.com" width="100%" height="100%" frameborder="0"
      ></iframe>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                show: false,
                value: 30,
                mainWallet: 543012.00,
                gameWallet: 2294.03,
                url: ''
            }
        },
        created() {
            const data = {
                ocss: 'http://www.fhi365.cn/css/app.cb458893d670b9e7ece80f5cbde06d57.css'
            }
            // this.url = encodeURI(JSON.stringify(data))

            // console.log(this.url);
        },
        mounted() {
            // window.onload = () =>{
            //     let test =
            //         document.getElementById('iframe').contentWindow.document.getElementById('app')
            //     console.log(test);
            //     test.style.display = 'none'
            // }

        },
        methods: {
            goUser() {
                this.$router.push({path: "/user"})
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home .menu a {
    display: inline-block;
    width: 100%;
    color: white !important;
  }

  h1, h2 {
    font-weight: normal;
  }


  .slider {
    display: flex;
    flex-direction: row;
  }


  a {
    color: #42b983;
  }

  .top-box {
    display: flex;
    flex-direction: row;
  }

  .left-box {
    width: 30%;
  }
  .iframeDiv {
    /*overflow-scrolling: touch;*/
    /*overflow: scroll;*/
    height: 100%;
    width: 100%;
  }

  .iframeDiv iframe {
    width: 100%;
    height: 100%;
  }

</style>
