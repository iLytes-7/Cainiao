<template>
  <div class="user">
    <div class="top-box">
      <div class="left-box" @click="goPerson">
        <img src="../assets/image/userhead.png" class="headpic">
      </div>
      <div class="right-box">
        <div style="display: flex; width:90%;flex-direction: row;justify-content: space-between">
          <div style="font-size: 1.5rem" v-clipboard:copy="name"
               v-clipboard:success="onCopy"
               v-clipboard:error="onError">{{name}}
          </div>
        </div>
        <div class="vip-box">
          <img src="../assets/image/vip.png" style="width: 1.5rem;height: 1.5rem;border-radius: 1rem;z-index: 999">
          <div @click="goCuxiao" style="font-size: 1rem;background-color: #654E40; padding: 0 1rem 0 1.5rem;
            text-align: center;margin-left: -1rem;z-index: 1; height: 1.5rem;line-height: 1.8rem;border-radius: 0.9rem">
            {{data.current_level}}
          </div>
          <van-icon @click="goPerson" name="arrow" size="1.4rem"
                    style="line-height: 1.5rem; position: absolute;right: 1.5rem"/>
        </div>
        <div style="position: relative; margin-top: 0.8rem " @click="goCuxiao">
          <van-slider
            @change="onchange"
            v-model="value"
            bar-height="0.4rem"
            active-color="#FF6D44"
            disabled
            inactive-color="#41305B"
            style="width: 70%;"
          />
          <span style="position: absolute;right: 3rem;top:-0.4rem" @click="goCuxiao">{{value}}%</span>
          <p style="line-height: 0.5rem;font-size: 0.9rem" @click="goCuxiao" v-if="maxLevel">
            <span v-if="false">存款：{{data.current_deposit}}/{{data.required_deposit}}¥</span>
            <span style="margin-left: 0rem">投注：{{data.current_bet}}/{{data.required_bet}}¥</span>
          </p>
          <p style="line-height: 0.5rem;font-size: 0.9rem" @click="goCuxiao" v-else>
            <span style="margin-left: 0rem">您目前已是最高级别会员</span>
          </p>
        </div>
      </div>
    </div>
    <div class="wallet">
      <div id="first" style="width: 38%;">
        <p style="font-size: 1.7rem;line-height: 1rem">{{ mainWallet | amount}}</p>
        <p style="font-size: 1.2rem;line-height: 1rem;color: white">主钱包</p>
      </div>
      <div @click="recharge" style="width: 18%;">
        <img src="../assets/image/chongzhi.png" style="width: 55%; ">
        <p style="margin:0; ">充值</p>
      </div>
      <div @click="withdraw" style="width: 18%;">
        <img src="../assets/image/tixian.png" style="width: 55%">
        <p style="margin:0">提现</p>
      </div>
    </div>
    <div class="line">
    </div>
    <div class="menu">
      <div>
        <router-link to="/bill">
          <img src="../assets/image/zdjl.png" alt=""><span>账单记录</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
      <div>
        <router-link to="/bankAccount/accountList">
          <img src="../assets/image/yhzh.png" alt=""><span>银行账户</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
      <div>
        <router-link to="/letter">
          <img src="../assets/image/xxsz.png" alt=""><span>站内信</span>
          <span class="redDot" v-if="redDot"></span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
      <div>
        <router-link to="/cuxiao">
          <img src="../assets/image/cxyh.png" alt="">
          <span>
            优惠任务
          </span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
      <div>
        <router-link to="/safety-setting/safety-setting">
          <img src="../assets/image/aqsz.png" alt=""><span>安全设置</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
      <div>
        <router-link to="/invitied">
          <img src="../assets/image/yqpy.png" alt=""><span>邀请朋友</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </router-link>
      </div>
    </div>
    <div style="height: 0.7rem;width:100%;background-color: #291744">
    </div>
    <div class="logout" @click="logout">退出登录</div>
    <div style="height: 0.7rem;width:100%;background-color: #291744">
    </div>
    <div style="width: 100%; text-align: center; margin-top: 1.5rem ;margin-bottom: 1.5rem ">
      <img src="../assets/image/RGLogo.png" style="width: 40%" alt="">
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Toast} from 'vant';
  import {message} from '@/api/message'
  import {getPlayerVipStatus} from '@/api/user'

  export default {
    data() {
      return {
        value: 0,
        loading: false,
        url: '',
        img: '',
        data: {},
        maxLevel: true,
        messageData: [],
        redDot: false
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token',
        'mainWallet'
      ])
    },
    mounted() {
      this.getQueryPlayerBalance()
      let data = {
        api_key: 'ea443b05c7067089bd2716f47257ee73',
        username: this.name,
        token: this.token,
        data: {}
      }
      getPlayerVipStatus(data).then(response => {
        this.data = response.result
        const bottomArr = response.result.required_bet.split(',')
        const topArr = response.result.current_bet.split(',')
        let bot = ''
        let top = ''
        bottomArr.forEach(item => {
          bot = bot + item
        })
        topArr.forEach(item => {
          top = top + item
        })
        this.value = Math.round(parseFloat(top) / parseFloat(bot) * 100 )

        // this.img = 'http://player.dj002.t1t.in' + response.result.current_level_badge
        if (response.result.is_at_max_level) {
          this.maxLevel = false
        }
      })
      let data1 = {
        api_key: "ea443b05c7067089bd2716f47257ee73",
        username: this.name,
        token: this.token
      }
      message(data1).then(res => {
        console.log(res.result.messages);
        this.messageData = res.result.messages
        this.messageData.find(item => {
          if (item.status === '6') {
            this.redDot = true
          }
        })
      })
    },
    methods: {
      onchange(value) {
      },
      recharge() {
        this.$router.push({path: "/recharge/recharge"})
      },
      goPerson() {
        this.$router.push({path: "/personal-info"})
      },
      goCuxiao() {
        this.$router.push({path: "/cuxiao"})
      },
      transform() {
        this.$router.push({path: "/transform"})
      },
      withdraw() {
        this.$router.push({path: "/withdraw"})
      },
      // 复制成功
      onCopy(e) {
        Toast('复制成功');
      },
      // 复制失败
      onError(e) {
        alert("失败");
        Toast('复制失败');
      },
      logout() {
        let data = {
          api_key: 'ea443b05c7067089bd2716f47257ee73',
          username: this.name,
          token: this.token
        }
        this.loading = true
        this.$store.dispatch('user/logout', data).then(res => {
          this.loading = false
          const ua = navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) != "micromessenger") {
            location.reload()
          } else {
            this.$router.push({path: "/login"})
          }
        }).catch(() => {
          this.loading = false
        })
      },
      getQueryPlayerBalance() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          refresh: 1
        }
        this.loading = true
        this.$store.dispatch('bank/queryPlayerBalance', data).then(res => {
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .user .menu a {
    display: inline-block;
    width: 100%;
    color: white !important;
  }

  .close {
    margin-left: 88%;
    margin-top: 6%
  }

  .slider {
    display: flex;
    flex-direction: row;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 1rem;
  }

  a {
    color: #42b983;
  }

  .top-box {
    display: flex;
    flex-direction: row;
  }

  .redDot {
    position: absolute;
    top: 1.5rem;
    left: 4.5rem;
    width: 0.6rem;
    height: 0.6rem;
    display: inline-block;
    border-radius: 100%;
    background-color: red;

  }

  .left-box {
    width: 30%;
  }

  .user .van-slider__button {
    display: none;
  }

  .right-box {
    width: 70%;
    margin-left: 1.5rem;
  }

  .headpic {
    width: 85%;
    border-radius: 10rem;
    margin-left: 18%;
  }

  .vip-box {
    display: flex;
    margin-top: 0.3rem;
    flex-direction: row;
  }

  .wallet {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #FF6D44;
    justify-content: space-around;
    border-radius: 1rem;
    width: 85%;
    height: 7.5rem;
    margin: 2rem auto;
    box-shadow: 0rem 0.1rem 0.4rem 0rem #FF6D44
  }

  .wallet div {
    position: relative;
    width: 50%;
    text-align: center;

  }


  /*.mid-box {*/
  /*  display: flex;*/
  /*  flex-direction: row;*/
  /*  align-items: center;*/
  /*  margin-top: 2rem;*/
  /*}*/

  /*.mid-box div {*/
  /*  text-align: center;*/
  /*  flex: 1;*/
  /*}*/

  /*.mid-box img {*/
  /*  width: 3rem;*/
  /*}*/

  /*.mid-box p {*/
  /*  margin-top: 1rem;*/
  /*}*/

  .menu {
    margin-top: 0rem;
  }

  .menu > div {
    padding: 0;
    position: relative;
    line-height: 4.5rem;
    height: 4.5rem;
    width: 100%;
    border-bottom: solid 2px #291744;
  }

  .menu span {
    margin-left: 5rem;
    font-size: 1.3rem;
  }

  .logout {
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: #AFACB4;
  }

  .menu img {
    padding: 0 0.6rem;
    width: 2.8rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.1rem;
  }

</style>
