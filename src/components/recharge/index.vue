<template>
  <div style="width: 90%;margin: auto">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style >
  #app .transferAmount .van-field__label{
    width: 10%;
    margin-right: 0.5rem;
    color: #AFACB4;
    font-size: 1.5rem;
    padding: 0.5rem 0rem;
  }
  #app .transferAmount .van-cell__value{
    border-bottom: 1px solid #483465;
    padding: 0.5rem 0rem;
  }
  #app .transferAmount .van-field__control{
    font-size: 2rem;
  }
  #app .methodList .van-cell{
    background-color: transparent;
    padding: 0.2rem;
  }
  #app .methodList .van-cell-group{
    background-color: transparent;
  }
  #app .methodList .van-hairline--top-bottom::after,#app .methodList .van-hairline-unset--top-bottom::after{
    border-color: transparent;
  }
</style>
