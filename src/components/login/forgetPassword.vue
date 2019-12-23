<template>
  <div class="forget">
    <p class="title">通过手机号码找回密码</p>
    <van-field v-model="userName" placeholder="请输入用户名"/>
    <span v-show="usernameError">用户名不能为空 长度必须为6-12之间由小写字母和数字组成！</span>
    <van-field v-model="tel" placeholder="请输入手机号码"/>
    <span v-show="telError">请输入正确的手机号码！</span>
    <div class="codeBox">
      <van-field v-model="code" placeholder="请输入验证码"/>
      <van-button color="#FF6D44" :disabled="codeBtnShow" @click="getCode">获取验证码</van-button>
    </div>
    <span v-show="codeError">验证码不能为空！</span>
    <van-field v-model="pwd1" type="password" placeholder="请输入您的新密码"/>
    <span v-show="passwordError">新密码不能为空！</span>
    <van-field v-model="pwd2" type="password" placeholder="请重新输入您的密码"/>
    <span v-show="cpasswordError">确认密码不能为空，且需要与账户密码一致！</span>
    <van-button class="btn" color="#FF6D44" :disabled="show" @click="submit">确定</van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import { forgetPwdsendMsg,forgetPwdRecvMsg } from '@/api/user'

    export default {
        data() {
            return {
                tel: '',
                code: '',
                userName: '',
                btnColor: '#7A483A',
                pwd1:'',
                loading: false,
                pwd2:'',
                usernameError:false,
                telError:false,
                codeError:false,
                passwordError:false,
                cpasswordError:false
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
            codeBtnShow(){
                let codeBtnShow;

                if (this.tel !== '' && this.userName !== '') {
                    codeBtnShow = false
                } else {
                    codeBtnShow = true
                }
                return codeBtnShow
            }
        },
        methods: {
            getCode(){
                let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                let username = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,12}$/;
                if (!username.test(this.userName)) {
                    this.usernameError = true
                    return;
                }else {
                    this.usernameError = false
                }
                if (!phone.test(this.tel)) {
                    this.telError = true
                    return;
                }else {
                    this.telError = false
                }
                let data = {
                    api_key:'ea443b05c7067089bd2716f47257ee73',
                    username: this.userName,
                    mobile_number: this.tel
                }
                this.loading = true
                forgetPwdsendMsg(data).then(response => {
                    console.log(response);
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            submit() {
                let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                let username = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,12}$/;
                let password = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,20}$/;
                if (!username.test(this.userName)) {
                    this.usernameError = true
                    return;
                }else {
                    this.usernameError = false
                }
                if (!phone.test(this.tel)) {
                    this.telError = true
                    return;
                }else {
                    this.telError = false
                }
                if (this.code === '') {
                    this.codeError = true
                    return;
                }else {
                    this.codeError = false
                }
                if (this.code === '') {
                    this.codeError = true
                    return;
                }else {
                    this.codeError = false
                }
                if (!password.test(this.pwd1)) {
                    this.passwordError = true
                    return;
                }else {
                    this.passwordError = false
                }
                if (this.pwd1 != this.pwd2) {
                    this.cpasswordError = true;
                    return;
                }else {
                    this.cpasswordError = false;
                }
                let data = {
                    api_key:'ea443b05c7067089bd2716f47257ee73',
                    username:this.userName,
                    verify_code:this.code,
                    password:this.pwd1,
                    password_conf:this.pwd2
                }
                forgetPwdRecvMsg(data).then(response => {
                    console.log(response);
                })
            }
        }
    }
</script>

<style scoped>
  .forget>span {
    color: red;
    padding-left: 1rem;
  }
</style>
