<template>
  <div class="home" style="height: 100%">
    <div class="top-btn-box">
      <img @click="goUser" src="../assets/image/goUser.png" alt="" style="width:1.8rem;height:1.6rem;position: absolute
          ;z-index:99999;left: 2rem;top: 1rem">
      <div
        style="position: absolute;top: 50%;text-align:center;left: 50%;transform: translateX(-50%) translateY(-50%);font-size: 1.6rem;color: white">
        <img src="../assets/image/homeLogo.png" alt="" style="width: 60%;margin-top: 0.5rem">
      </div>
      <a href="https://chat.liveneed.net/chat/Hotline/channel.jsp?cid=5052195&cnfid=42351&j=7220487914&s=1"><img
        src="../assets/image/homeKefu.png" style="width:1.7rem;height:1.8rem;position: absolute
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
                    let data = {
                        api_key: "ea443b05c7067089bd2716f47257ee73",
                        token: this.token,
                        username: this.name,
                        refresh: 1
                    }
                    if(this.name){
                        console.log(this.name)
                        this.$store.dispatch('bank/queryPlayerBalance', data).then(res => {
                        }).catch(() => {
                        })
                    }
                  console.log(this.token)
                  if (this.token === undefined || !this.token){
                        this.url = "https://h5.egaming1.com/?payload=logout"
                          //   'https://player.dj002.t1t.in/'+response.result.game_types.e_sports.mobile
                          // "https://h5.egaming1.com?payload=logout"
                    } else {
                        this.url =
                        'https://bird10.com/iframe/auth/login_with_token/'+this.token+'?next=/'+response.result.game_types.e_sports.mobile
                    }
                    console.log(this.url);
                    // alert(this.url)
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }).catch(() => {
                this.loading = false
            })
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
    background-color: #331a4d;
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
