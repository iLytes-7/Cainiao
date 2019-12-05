<template>
  <div class="forget">
    <p class="title">通过手机号码找回密码</p>
    <van-field v-model="tel" placeholder="请输入手机号码"/>
    <div class="codeBox">
      <van-field v-model="code" placeholder="请输入验证码"/>
      <van-button color="#666666">验证码</van-button>
    </div>
    <van-button class="btn" color="#FF6D44"  :disabled="show" @click="next">下一步</van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tel: '',
        code: '',
        btnColor: '#7A483A'
      }
    },
    computed: {
      show() {
        let show;
        if(this.tel !== ''&&this.code !== ''){
          show = false
        }else{
          show = true
        }
        return show
      }
    },
    methods: {
      next() {
        this.$router.push({path:"/login/forget1"})
      }
    }
  }
</script>

<style scoped>
</style>
