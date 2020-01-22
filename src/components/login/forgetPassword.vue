<template>
  <div class="forget">
    <a href="https://chat.liveneed.net/chat/Hotline/channel.jsp?cid=5052195&cnfid=42351&j=7220487914&s=1"><img style="width:1.9rem;height:2rem;position: absolute
          ;z-index:99999;right: 1rem;top: 1.8rem" src="../../assets/image/homeKefu.png" alt=""></a>
    <p class="title">通过手机号码找回密码</p>
    <van-field v-model="userName" placeholder="请输入用户名"/>
    <span v-show="usernameError">用户名不能为空 长度必须为6-12之间由小写字母和数字组成！</span>
    <p style="margin: 0.5rem 1rem 0; color: white">提示：如果忘记账户名请联系客服！</p>
    <van-field v-model="tel" placeholder="请输入手机号码"/>
    <span v-show="telError">请输入正确的手机号码！</span>
    <div class="codeBox">
      <van-field v-model="code" placeholder="请输入验证码"/>
      <van-button color="#FF6D44" :disabled="codeBtnShow" @click="getCode">
        <span v-if="showSecond">获取验证码</span>
        <van-count-down @finish="finish" v-else style="color: white"
          :time="time"
          format="ss 秒获取"
        />
      </van-button>
    </div>
    <span v-show="codeError">验证码不能为空！</span>
    <van-field v-model="pwd1" type="password" placeholder="新密码"/>
    <span v-show="passwordError">新密码不能为空！</span>
    <van-field v-model="pwd2" type="password" placeholder="确认密码"/>
    <span v-show="cpasswordError">确认密码不能为空，且需要与账户密码一致！</span>
    <van-button class="btn" color="#FF6D44" :disabled="show" @click="submit">确定</van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {forgetPwdsendMsg, forgetPwdRecvMsg} from '@/api/user'

  export default {
    data() {
      return {
        tel: '',
        code: '',
        userName: '',
        showSecond :true,
        time:0,
        btnColor: '#7A483A',
        pwd1: '',
        loading: false,
        pwd2: '',
        usernameError: false,
        telError: false,
        codeError: false,
        passwordError: false,
        cpasswordError: false
      }
    },
    computed: {
      show() {
        let show;
        if (this.tel !== '' && this.code !== '') {
          show = false
        } else {
          show = true
        }
        return show
      },
      codeBtnShow() {
        let codeBtnShow;

        if (this.tel !== '' && this.userName !== '') {
          codeBtnShow = false
        } else {
          codeBtnShow = true
        }
        if (!this.showSecond){
          codeBtnShow = true
        }
        return codeBtnShow
      }
    },
    methods: {
      getCode() {
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let username = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,12}$/;
        if (!username.test(this.userName)) {
          this.usernameError = true
          return;
        } else {
          this.usernameError = false
        }
        if (!phone.test(this.tel)) {
          this.telError = true
          return;
        } else {
          this.telError = false
        }
        let data = {
          api_key: 'ea443b05c7067089bd2716f47257ee73',
          username: this.userName,
          mobile_number: this.tel
        }
        this.loading = true
        forgetPwdsendMsg(data).then(response => {
          this.loading = false
          this.showSecond = false
          this.time = 60000
          this.$toast.success('验证码发送成功!')
        }).catch(() => {
          this.loading = false
        })
      },
      finish(){
        this.showSecond = true
      },
      submit() {
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let username = /^[a-z][a-z0-9]{5,11}$/;
        let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/;
        if (!username.test(this.userName)) {
          this.usernameError = true
          return;
        } else {
          this.usernameError = false
        }
        if (!phone.test(this.tel)) {
          this.telError = true
          return;
        } else {
          this.telError = false
        }
        if (this.code === '') {
          this.codeError = true
          return;
        } else {
          this.codeError = false
        }
        if (this.code === '') {
          this.codeError = true
          return;
        } else {
          this.codeError = false
        }
        if (!password.test(this.pwd1)) {
          this.passwordError = true
          return;
        } else {
          this.passwordError = false
        }
        if (this.pwd1 != this.pwd2) {
          this.cpasswordError = true;
          return;
        } else {
          this.cpasswordError = false;
        }
        let data = {
          api_key: 'ea443b05c7067089bd2716f47257ee73',
          username: this.userName,
          verify_code: this.code,
          password: this.pwd1,
          password_conf: this.pwd2
        }
        forgetPwdRecvMsg(data).then(response => {
          console.log(response);
        })
      }
    }
  }
</script>

<style scoped>
  .forget > span {
    color: red;
    padding-left: 1rem;
  }
  .codeBox span {
    padding-left: 0;
    color: white;
  }

  .codeBox div {

  }

  .codeBox button {
    width: 38%;
  }
</style>
