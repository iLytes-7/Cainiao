<template>
  <div class="forget">
    <van-field required v-model="username" v-show="showUsername" placeholder="请输入用户名" @focus="showUsernameTip"
               @blur="testUsername"/>
    <span v-show="usernameTip" style="color: white">用户名以字母开头，长度必须为6-12之间由小写字母和数字组成！</span>
    <span v-show="usernameError">用户名以字母开头，长度必须为6-12之间由小写字母和数字组成！</span>
    <van-field required type="password" v-model="password" v-show="showPassword" placeholder="请输入账户密码"
               @focus="showPasswordTip" @blur="showPasswordError"/>
    <span v-show="passwordError">账户密码 长度必须为6-20之间由英文字母与数字组成！不能与您的用户名相似！</span>
    <span v-show="passwordTip" style="color: white">账户密码 长度必须为6-20之间由英文字母与数字组成！不能与您的用户名相似！</span>
    <van-field required type="password" v-model="cpassword" v-show="showCpassword" placeholder="确认密码"
               @focus="showCpasswordTip" @blur="showCpasswordError"/>
    <span v-show="cpasswordError">确认密码不能为空，且需要与账户密码一致！</span>
    <span v-show="cpasswordTip" style="color: white">确认密码不能为空，且需要与账户密码一致！</span>
    <van-field required v-model="firstName" v-show="showFirstName" placeholder="姓名" @focus="showfirstNameTip"
               @blur="showfirstNameError"/>
    <span v-show="firstNameError">为了您的资金安全，请填写真实姓名！</span>
    <span v-show="firstNametip" style="color: white">为了您的资金安全，请填写真实姓名！</span>
    <van-field required v-model="tel" v-show="showTel" placeholder="请输入手机号码" @focus="showTelTip" @blur="showTelError"/>
    <span v-show="telError">请输入正确的手机号码！</span>
    <span v-show="telTip" style="color:white;">请输入正确的手机号码！</span>
    <div class="codeBox">
      <van-field required v-model="code" placeholder="请输入验证码"/>
      <van-button color="#FF6D44" :disabled="codeBtnShow" @click="getCode">
        <span v-if="showSecond">获取验证码</span>
        <van-count-down @finish="finish" v-else style="color: white"
                        :time="time"
                        format="ss 秒获取"
        />
      </van-button>
    </div>
    <!--    <van-field required v-model="lastName" v-show="showLastName" placeholder="姓氏" @focus="showlastNameTip"-->
    <!--               @blur="showlastNameError"/>-->
    <!--    <span v-show="lastNameError">请填写姓</span>-->
    <!--    <span v-show="lastNameTip" style="color:white;">请填写姓</span>-->
    <van-field v-model="yqCode" placeholder="邀请码（选填）"/>
    <van-button class="btn" color="#FF6D44" @click="submit" :disabled="show" :loading="loading">立即注册</van-button>
    <van-checkbox v-model="checked" shape="square" class="noBg">
      <p slot="default">
        我已年满18岁并同意此
        <span style="color: #FF6D44">
          用户条款
        </span>
        和
        <span style="color: #FF6D44">
          隐私政策
        </span>
      </p>
    </van-checkbox>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {isPlayerExist, getRegSettings, smsRegSendSms} from '@/api/user';

  export default {
    inject: ['reload'],
    data() {
      return {
        tel: '',
        username: '',
        password: '',
        cpassword: '',
        lastName: '',
        firstName: '',
        showSecond :true,
        showUsername: false,
        showPassword: false,
        showCpassword: false,
        showTel: false,
        showFirstName: false,
        showLastName: false,
        yqCode: '',
        code: '',
        tuid: '',
        usernameError: false,
        usernameTip: false,
        passwordTip: false,
        cpasswordTip: false,
        telTip: false,
        lastNameTip: false,
        firstNametip: false,
        passwordError: false,
        telError: false,
        firstNameError: false,
        lastNameError: false,
        cpasswordError: false,
        checked: false,
        loading: false
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
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let codeBtnShow;
        if (this.tel !== '' && phone.test(this.tel)) {
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
    created() {
      if (this.$route.query.referralcode) {
        this.yqCode = this.$route.query.referralcode
      }
      let data = {
        api_key: "ea443b05c7067089bd2716f47257ee73",
      }
      this.loading = true
      getRegSettings(data).then(response => {
        console.log(response.result.validators);
        if (response.result.validators.username) {
          this.showUsername = true
        }
        if (response.result.validators.password) {
          this.showPassword = true
          this.showCpassword = true
        }
        if (response.result.validators.first_name) {
          this.showFirstName = true
        }
        if (response.result.validators.last_name) {
          this.showLastName = true
        }
        if (response.result.validators.contact_number) {
          this.showTel = true
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    methods: {
      finish(){
        this.showSecond = true
      },
      getCode() {
        let data = {
          api_key: 'ea443b05c7067089bd2716f47257ee73',
          contactNumber: this.tel
        }
        this.loading = true
        smsRegSendSms(data).then(response => {
          this.tuid = response.result.tuid
          this.showSecond = false
          this.loading = false
          this.time = 60000
          this.$toast.success('验证码发送成功!')
        }).catch(() => {
          this.loading = false
        })
      },
      submit() {
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let username = /^[a-z][a-z0-9]{5,11}$/;
        let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/;
        // this.$toast.success('成功');
        if (!username.test(this.username)) {
          this.usernameError = true
          return;
        } else {
          this.usernameError = false
        }
        if (!password.test(this.password)) {
          this.passwordError = true
          return;
        } else {
          this.passwordError = false
        }
        if (this.username === this.password) {
          this.passwordError = true;
          return;
        } else {
          this.passwordError = false;
        }
        if (this.cpassword != this.password) {
          this.cpasswordError = true;
          return;
        } else {
          this.cpasswordError = false;
        }
        if (this.firstName === '') {
          this.firstNameError = true
          return;
        } else {
          this.firstNameError = false
        }
        if (!phone.test(this.tel)) {
          this.telError = true
          return;
        } else {
          this.telError = false
        }
        let termstemp = ''
        if (this.checked == true) {
          termstemp = 1
        } else {
          termstemp = 0
          this.$toast("请勾选")
          return;
        }
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          contactNumber: this.tel,
          verify_code: this.code,
          tuid: this.tuid,
          username: this.username,
          password: this.password,
          cpassword: this.cpassword,
          firstName: this.firstName,
          lastName: this.lastName,
          terms: termstemp,
          referral_code: this.yqCode
        }
        this.loading = true
        this.$store.dispatch('user/signUp', data).then(res => {
          this.$toast.success("注册成功！")
          this.$router.push({path: "/"})
          this.reload()
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      },
      // creatUsername() {
      //     var Num = "";
      //     for (var i = 0; i < 6; i++) {
      //         Num += Math.floor(Math.random() * 10);
      //     }
      //     var result = [];
      //     for (var i = 0; i < 2; i++) {
      //         var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
      //         //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
      //         result.push(String.fromCharCode(65 + ranNum));
      //     }
      //     var code = result.join('');
      //     return code + Num
      // },
      testUsername() {
        let username = /^[a-z][a-z0-9]{5,11}$/;
        if (!username.test(this.username)) {
          this.usernameError = true
          this.usernameTip = false
          return;
        } else {
          this.usernameError = false
        }
        this.usernameTip = false
        let api_key = 'ea443b05c7067089bd2716f47257ee73'
        isPlayerExist(api_key, this.username).then(res => {
          this.usernameError = false
        }).catch(() => {
          this.usernameError = true
        })
      },
      showUsernameTip() {
        if (this.usernameError) {
          this.usernameTip = false
        } else {
          this.usernameTip = true
        }
      },
      showPasswordTip() {
        if (this.passwordError) {
          this.passwordTip = false
        } else {
          this.passwordTip = true
        }
      },
      showPasswordError() {
        let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/;
        console.log(this.password)
        if (!password.test(this.password) || this.username === this.password) {
          this.passwordError = true
          this.passwordTip = false
          return;
        } else {
          this.passwordError = false
        }
        this.passwordTip = false
      },
      showCpasswordTip() {
        if (this.cpasswordError) {
          this.cpasswordTip = false
        } else {
          this.cpasswordTip = true
        }
      },
      showCpasswordError() {
        if (this.cpassword != this.password) {
          this.cpasswordError = true;
          this.cpasswordTip = false
          return;
        } else {
          this.cpasswordError = false;
        }
        this.cpasswordTip = false
      },
      showTelTip() {
        if (this.telError) {
          this.telTip = false
        } else {
          this.telTip = true
        }
      },
      showTelError() {
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!phone.test(this.tel)) {
          this.telError = true
          this.telTip = false
          return;
        } else {
          this.telError = false
        }
        this.telTip = false
      },
      showfirstNameTip() {
        if (this.firstNameError) {
          this.firstNametip = false
        } else {
          this.firstNametip = true
        }
      },
      showfirstNameError() {
        if (this.firstName === '') {
          this.firstNameError = true
          this.firstNametip = false
          return;
        } else {
          this.firstNameError = false
        }
        this.firstNametip = false
      },
      showlastNameTip() {
        if (this.lastNameError) {
          this.lastNameTip = false
        } else {
          this.lastNameTip = true
        }
      },
      showlastNameError() {
        if (this.lastName === '') {
          this.lastNameError = true
          this.lastNameTip = false
          return;
        } else {
          this.lastNameError = false
        }
        this.lastNameTip = false
      },

    }
  }
</script>

<style lang="scss" scoped>
  .noBg {
    background-color: transparent;
  }

  .forget {
    span {
      color: red;
      padding-left: 1rem;
    }

    .btn span {
      color: white;
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
  }
</style>
