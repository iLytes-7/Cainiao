<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto">
    <div class="content">
      <div style="margin-top: 1rem; padding-top: 1rem; margin-left:1rem;font-size: 1.2rem;color: #AFACB4">主钱包</div>
      <div class="input">
        <div class="input-left-icon">
          <img src="../assets/logo.png" style="width: 1.3rem">
        </div>
        <div class="input-right">
          <van-field v-model="money" placeholder="0.00" type="number" size="large"
                     style="padding: 0.2rem 0.2rem ; background-color: #291744;
                     border-bottom: solid 1px #483465; "/>
        </div>
      </div>
      <div style="margin-top: 1rem;margin-left: 1rem;font-size: 1.2rem;color: #AFACB4">待处理提款：<span
        style="color: #ffffff">¥0
        .00</span>
      </div>
      <div class="botton-group">
        <div>
          全部转账
        </div>
        <div>
          刷新余额
        </div>
        <div>
          存款
        </div>
        <div>
          取款
        </div>
      </div>
    </div>
    <div class="RG">
      <div>RG</div>
      <div>¥ <span style="color: white">1.80</span></div>
    </div>
    <div>
      <van-button type="primary" size="large" color="#FF6D44"  style="margin-top: 2rem;border-radius: 6px">一键转入
      </van-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                money: ''
            }
        }
    }
</script>

<style scoped>
  .RG{
    color: #E1DDE7;
    margin-top: 1rem;
    font-size: 1.3rem;
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .content {
    background-color: #291744;
    border-radius: 1rem;
  }

  .botton-group {
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin-top: 1.7rem;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    color: #FF6D44;
    padding-bottom: 1.8rem;
  }

  .botton-group > div {
    margin-top: 0.9rem;
    width: 48.5%;
    border: solid 1px #FF6D44;
    height: 3.8rem;
    line-height: 3.8rem;
    border-radius: 0.6rem;
  }
  .input {
    margin-left: 1rem;
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
  }
  .input-left-icon {
    width: 12%;
    padding-left: 1.3rem;
  }
  .input-right {
    width: 75%;
  }
  .van-field__control{
    font-size: 3.2rem ;
  }


</style>
