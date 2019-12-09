<template>
  <div class="login">
    <div class="loginBg">
      <img src="../../assets/logo.png">
    </div>
    <div class="input">
      <van-field v-model="username"  placeholder="账号" />
      <van-field v-model="password"  type="password"  placeholder="密码" />
      <div class="code" id="code">
        <van-field style="padding:1rem 0px 1rem 2rem" v-model="verifycode" placeholder="验证码" />
        <div class="codeBox">
          <identify-code :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"  style="display: inline-block;"></identify-code>
          <div style="position: relative;display: inline-block">
            <van-icon name="replay" @click="refreshCode" class="refresh"/>
          </div>
        </div>
      </div>
      <div class="xuanZe">
        <van-checkbox v-model="checked" shape="square">保持登录状态</van-checkbox>
        <router-link to="/login/forget">忘记密码</router-link>
      </div>
      <van-button color="#FF6D44" class="btn" @click="login">立即登录</van-button>
      <router-link class="zhuce" to="/login/registered">免费注册</router-link>
    </div>
  </div>
</template>

<script>
import identifyCode from '../identifyCode.vue';
export default {
  components: {
    identifyCode
  },
    data() {
        return {
          password: '',
          username: '',
          verifycode: '',
          identifyCode: "",
          identifyCodes: "1234567890",
          contentHeight: 44,
          contentWidth: 112,
          checked: false
        }
    },
  mounted() {
    this.contentHeight = document.getElementById('code').getBoundingClientRect().height
    this.contentWidth = document.getElementById('code').getBoundingClientRect().width/2*0.7
    this.$nextTick(()=>{
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    })
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ];
      }
    },
    login() {
      if (this.identifyCode != this.verifycode) {
        this.$toast.fail('验证码输入错误');
        return;
      }
    }
  }
}
</script>

<style scoped>
  .loginBg{
    text-align: center;
  }
  .input{
    margin-top: 3rem;
  }
  .input>div{
    margin-top: 2rem;
    padding: 1rem 2rem;
    background-color: #291744;
    color: #7E7B83;
  }
  .login img{
    width: 5.5rem;
    margin-top: 5rem;
  }
  .input>div.code{
    display: flex;
    padding: 0;
  }
  .code>div{
    flex: 1;
    background-color: #291744;
  }
  .refresh{
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%,-50%);
  }
  .codeBox{
    display: flex;
  }
  .codeBox>div:first-of-type{
    width: 70%;
  }
  .codeBox>div:last-of-type{
    width: 30%;
  }
  .input>div.xuanZe{
    position: relative;
    padding: 0;
    background-color: transparent;
    color: #AFACB4;
  }
  .input>div.xuanZe>div{
    width: 35%;
  }
  .xuanZe>a{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #AFACB4;
  }
  .zhuce{
    float: right;
    color: #AFACB4;
    margin-top: 2rem;
  }
  </style>
