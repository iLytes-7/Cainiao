<template>
  <div class="home" style="height: 100%">
    <van-button @click="showPopup" icon="orders-o" color="linear-gradient(to right, #4bb0ff, #6149f6)"></van-button>
    <div class="iframeDiv">
      <iframe id="iframe" src="https://h5.egaming1.com" width="100%" height="100%" frameborder="0"
      ></iframe>
    </div>
    <van-popup v-model="show"
               position="left"
               :style="{ height: '100%',width:'85%', backgroundColor:'#230F40'}">
      <van-icon name="cross" size="2.2rem" color="#ffffff" class="close" @click="closePopup"/>
      <div class="top-box" @click="goPerson">
        <div class="left-box">
          <img src="../assets/userhead.png" class="headpic">
        </div>
        <div class="right-box">
          <div style="font-size: 1.5rem">蒋大仙</div>
          <div class="vip-box">
            <img src="../assets/vip.png" style="width: 1.5rem;height: 1.5rem;border-radius: 1rem;z-index: 999">
            <div style="font-size: 1rem;background-color: #654E40;width: 4.5rem;
            text-align: center;margin-left: -1rem;z-index: 1; height: 1.5rem;line-height: 1.8rem;border-radius: 0.9rem">
              VIP2
            </div>
            <van-icon name="arrow" size="1.4rem" style="line-height: 1.5rem; position: absolute;right: 1.5rem"/>
          </div>
          <div style="position: relative; margin-top: 0.8rem ">
            <van-slider
              @change="onchange"
              v-model="value"
              bar-height="0.4rem"
              active-color="#FF6D44"
              inactive-color="#41305B"
              style="width: 70%;"
            />
            <span style="position: absolute;right: 3rem;top:-0.4rem">20%</span>
            <p style="line-height: 0.5rem;font-size: 0.9rem">
              <span>存款：30.00/0.00¥</span>
              <span style="margin-left: 1.8rem">下注：1.75/10.00$</span>
            </p>
          </div>
        </div>
      </div>
      <div class="wallet">
        <div id="first">
          <p style="font-size: 1.7rem;line-height: 1rem">543,012.00</p>
          <p style="font-size: 1.2rem;line-height: 1rem;color: #FFC8BD">主钱包</p>
        </div>
        <div>
          <p style="font-size: 1.7rem;line-height: 1rem">2913.00</p>
          <p style="font-size: 1.2rem;line-height: 1rem;color: #FFC8BD">游戏钱包</p>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="mid-box">
        <div @click="recharge">
          <img src="../assets/chongzhi.png">
          <p>充值</p>
        </div>
        <div>
          <img src="../assets/tixian.png">
          <p>提现</p>
        </div>
        <div>
          <img src="../assets/zhuanzhang.png">
          <p>转账</p>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="menu">
        <div>
          <router-link to="/bill">
            <img src="../assets/zdjl.png" alt=""><span>账单记录</span>
            <van-icon name="arrow" size="1.4rem"
                      style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
          </router-link>
        </div>
        <div>
          <router-link to="/bankAccount/bankAccount">
            <img src="../assets/yhzh.png" alt=""><span>银行账户</span>
            <van-icon name="arrow" size="1.4rem"
                      style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
          </router-link>
        </div>
        <div>
          <img src="../assets/xxsz.png" alt=""><span>消息设置</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </div>
        <div>
          <router-link to="/cuxiao">
            <img src="../assets/cxyh.png" alt="">
            <span>
            促销优惠
          </span>
            <van-icon name="arrow" size="1.4rem"
                      style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
          </router-link>
        </div>
        <div>
          <router-link to="/safety-setting/safety-setting">
            <img src="../assets/aqsz.png" alt=""><span>安全设置</span>
            <van-icon name="arrow" size="1.4rem"
                      style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
          </router-link>
        </div>
        <div>
          <img src="../assets/yqpy.png" alt=""><span>邀请朋友</span>
          <van-icon name="arrow" size="1.4rem"
                    style="position: absolute;right: 1.5rem; top:50%; transform: translateY(-50%);"/>
        </div>

      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        show: false,
        value: 30,
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
      showPopup() {
        this.show = true;
      },
      closePopup() {
        this.show = false;
      },
      onchange(value) {
        this.value = 30;
      },
      recharge() {
        this.$router.push({path: "/recharge/recharge"})
      },
      goPerson() {
        this.$router.push({path: "/personal-info"})
      }
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

  .left-box {
    width: 30%;
  }

  .van-slider__button {
    display: none;
  }

  .right-box {
    width: 75%;
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

  .wallet > div:first-of-type::after {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 2rem;
    width: 1px;
    background-color: white;
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

  .mid-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
  }

  .mid-box div {
    text-align: center;
    flex: 1;
  }

  .mid-box img {
    width: 3rem;
  }

  .mid-box p {
    margin-top: 1rem;
  }

  .menu {
    margin-top: 1rem;
  }

  .menu > div {
    padding: 0.3rem 0;
    position: relative;
    line-height: 4rem;
    height: 4rem;
    width: 100%;
  }

  .menu span {
    margin-left: 5rem;
    font-size: 1.3rem;
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
