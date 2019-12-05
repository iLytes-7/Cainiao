<template>
  <div class="forget">
    <van-field v-model="tel" placeholder="请输入手机号码" />
    <van-field v-model="password" placeholder="请输入账户密码" />
    <van-field required v-model="firstName" placeholder="名字" />
    <van-field required v-model="lastName" placeholder="姓氏" />
    <van-field v-model="yqCode" placeholder="邀请码" />
    <div class="codeBox">
      <van-field v-model="code" placeholder="请输入验证码" right-icon="replay"/>
      <van-button color="#666666">1212</van-button>
    </div>
    <van-button class="btn" color="#FF6D44"  @click="submit">立即注册</van-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: '',
      password: '',
      lastName: '',
      firstName: '',
      yqCode: '',
      code: '',
      checked: false
    }
  },
  methods: {
    submit() {
      this.$toast.success('成功');
    }
  }
}
</script>

<style scoped>
  .noBg{
    background-color: transparent;
  }
</style>
