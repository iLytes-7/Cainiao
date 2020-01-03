<template>
  <div class="home" style="height: 100%">
    <div class="top-btn-box">
      <van-button @click="goUser" icon="user-o" style="width: 4rem; height: 100%; margin-left: 1rem"
                  color="linear-gradient(to right, #4bb0ff, #6149f6)"></van-button>
      <a href="https://chat.liveneed.net/chat/Hotline/channel.jsp?cid=5052195&cnfid=42351&j=7220487914&s=1"><img
        src="../assets/image/kefu.png" style="width:1.9rem;height:2.1rem;position: absolute
          ;z-index:99999;right: 1rem;top: 1rem"></a>
    </div>
    <div class="iframeDiv">
      <iframe @lοad="loadFrame(this)" id="iframe" :src="url" width="100%" height="100%" frameborder="0"
      ></iframe>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import { listGamePlatforms ,listGamesByPlatform } from '@/api/listGame';
    // import { param } from '@/utils'
    // const jwt = require("jsonwebtoken");
    // const secret = '85519a02c7663398d557b68566a27ac0';
    export default {
        name: 'HelloWorld',
        data() {
            return {
                show: false,
                value: 30,
                mainWallet: 543012.00,
                gameWallet: 2294.03,
                platform_id: 0,
                url: ''
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        created() {
            const data = {
                ocss: 'http://www.fhi365.cn/css/app.cb458893d670b9e7ece80f5cbde06d57.css'
            }
            let post = {
                api_key: "ea443b05c7067089bd2716f47257ee73",
                username: this.name,
                token:this.token
            }
            this.loading = true
            listGamePlatforms(post).then(response => {
                this.platform_id = response.result[0].id
                let post1 = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token:this.token,
                    platform_id: parseInt(this.platform_id)
                }
                listGamesByPlatform(post1).then(response => {

                    if (this.token === undefined || this.token === ''){
                        this.url =
                            'http://player.dj002.t1t.in/'+response.result.game_types.e_sports.mobile+'?init=%7B%22ocss%22%3A%22https%3A%2F%2Fapplet.fhi365.cn%2Fh5_20190912.css%22%7D'
                    } else {
                        this.url =
                        'https://player.dj002.t1t.in/iframe/auth/login_with_token/'+this.token+'?next=/'+response.result.game_types.e_sports.mobile+'&init=%7B%22ocss%22%3A%22https%3A%2F%2Fapplet.fhi365.cn%2Fh5_20190912.css%22%7D'
                    }
                    console.log(this.url);
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }).catch(() => {
                this.loading = false
            })


            // const token = jwt.sign({
            //     app_key:'22e5da3edff',
            //     method: 'account.register',
            //     data:{
            //         'account_name' : 'jc123456',
            //         'nickname' : '⼤大⻰龙王',
            //         'currency' : 'CNY/USD/HKD/uBCH'
            //     }
            // }, secret);
            // console.log(token);
            // let a  = {
            //     payload: token
            // }
            // this.axios({
            //     headers: {'Content-Type': 'multipart/form-data'},
            //     method: 'post',
            //     url: 'https://openapi.raygaming.co/gateway',
            //     data: param(a),
            // });

            // this.url = encodeURI(JSON.stringify(data))

            // console.log(this.url);
        },
        mounted() {
        },

        methods: {
            goUser() {
                this.$router.push({path: "/user"})
            },
            loadFrame(obj){
                  var url = obj.contentWindow.location.href;
                 console.log(url);
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home{
  }
  .home .menu a {
    display: inline-block;
    width: 100%;
    color: white !important;
  }

  .top-btn-box{
    position: fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.5rem;
  }
  h1, h2 {
    font-weight: normal;
  }
  .home-btn{
    margin-left: 1rem;
    margin-top: 1rem;
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
    position: fixed;
    top:3.5rem;
    padding-bottom: 4rem;
    height: 100%;
    width: 100%;
  }

  .iframeDiv iframe {
    width: 100%;
    height: 100%;
  }

</style>
