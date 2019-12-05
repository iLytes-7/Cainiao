<template>
  <div class="forget">
    <p class="title">验证手机验证码并创建新密码</p>
    <van-field v-model="pwd1" placeholder="请输入您的新密码"/>
    <van-field v-model="pwd2" placeholder="请重新输入您的密码"/>
    <van-button class="btn" color="#FF6D44">确定</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pwd1:'',
      pwd2:''
    }
  }
}
</script>

<style scoped>

</style>
