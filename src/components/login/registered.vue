<template>
  <div class="forget">
    <van-field required v-model="username" placeholder="请输入用户名" @blur="testUsername"/>
    <span v-show="usernameError">用户名 长度必须为6-12之间由小写字母和数字组成！</span>
    <van-field required type="password" v-model="password" placeholder="请输入账户密码"/>
    <span v-show="passwordError">账户密码 长度必须为6-20之间由英文字母与数字组成！不能与您的用户名相似！</span>
    <van-field required type="password" v-model="cpassword" placeholder="确认密码"/>
    <span v-show="cpasswordError">确认密码不能为空，且需要与账户密码一致！</span>
    <van-field required v-model="tel" placeholder="请输入手机号码"/>
    <span v-show="telError">请输入正确的手机号码！</span>
    <van-field required v-model="firstName" placeholder="名字"/>
    <span v-show="firstNameError">请填写名</span>
    <van-field required v-model="lastName" placeholder="姓氏"/>
    <span v-show="lastNameError">请填写姓</span>
    <van-field v-model="yqCode" placeholder="邀请码"/>
    <!--    <div class="codeBox">-->
    <!--      <van-field v-model="code" placeholder="请输入验证码" right-icon="replay"/>-->
    <!--      <van-button color="#666666">1212</van-button>-->
    <!--    </div>-->
    <van-button class="btn" color="#FF6D44" @click="submit" :loading="loading">立即注册</van-button>
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
  import {isPlayerExist} from '@/api/user';

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
        yqCode: '',
        loading: false,
        usernameError: false,
        passwordError: false,
        telError: false,
        firstNameError: false,
        lastNameError: false,
        cpasswordError: false,
        checked: false,
        loading: false
      }
    },
    created() {
      if(this.$route.query.referralcode){
        this.yqCode = this.$route.query.referralcode
      }
    },
    methods: {
      submit() {
        let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let username = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,12}$/;
        let password = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,20}$/;
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
        if (!phone.test(this.tel)) {
          this.telError = true
          return;
        } else {
          this.telError = false
        }
        if (this.firstName === '') {
          this.firstNameError = true
          return;
        } else {
          this.firstNameError = false
        }
        if (this.lastName === '') {
          this.lastNameError = true
          return;
        } else {
          this.lastNameError = false
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
          username: this.username,
          password: this.password,
          cpassword: this.cpassword,
          firstName: this.firstName,
          lastName: this.lastName,
          contactNumber: this.tel,
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
      creatUsername() {
        var Num = "";
        for (var i = 0; i < 6; i++) {
          Num += Math.floor(Math.random() * 10);
        }
        var result = [];
        for (var i = 0; i < 2; i++) {
          var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
          //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
          result.push(String.fromCharCode(65 + ranNum));
        }
        var code = result.join('');
        return code + Num

      },
      testUsername() {
        console.log(this.username);
        let api_key = 'ea443b05c7067089bd2716f47257ee73'
        isPlayerExist(api_key, this.username).then(res => {
          // this.usernameError = true
        }).catch(() => {
          this.usernameError = true
        })
      }
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
  }
</style>
