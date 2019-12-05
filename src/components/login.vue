<template>
  <div class="login">
    <div>
      <img src="../assets/logo.png">
    </div>
    <div class="input">
      <van-field v-model="username"  placeholder="账号" />
      <van-field v-model="password"  type="password"  placeholder="密码" />

    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
  .login{
    text-align: center;
  }
  .input{
    width: 90%;
    margin: auto;
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
  .van-cell:not(:last-child)::after{
    display: none;
  }

</style>
