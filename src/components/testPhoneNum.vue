<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto">
    <div class="phone">手机号码</div>
    <div class="phone-input">
      <div style="width: 63%">
        <van-field v-model="phoneNum" placeholder="请输入手机号码" type="number"
                   style="padding: 1rem 1rem;height: 100%;background-color: #291744;border-radius: 0.3rem 0rem
                   0rem 0.3rem;" />
      </div>
      <div style="width: 37%">
        <van-button type="info"
                    style="height: 100%;width: 100%;background-color: #476AD4;color: #E1E5F2;
                    border: none;
                    ;border-radius: 0rem 0.3rem 0.3rem 0rem;
">获取验证码
        </van-button>
      </div>
    </div>
    <div class="phone">验证码</div>
    <div class="phone-input">
      <div style="width: 100%">
        <van-field v-model="code" placeholder="请输入验证码" type="number"
                   style="padding: 1rem 1rem;height: 100%;background-color: #291744;border-radius:0.3rem" />
      </div>
    </div>
    <div style="text-align: center">
      <van-button type="primary" size="large" color="#FF6D44"
                  style="margin-top: 4rem;border-radius: 5px;width: 100%; ">提交验证
      </van-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                phoneNum: '',
                code:''
            }
        }
    }
</script>

<style scoped>
  .phone {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #7E7B83;
  }

  .van-cell-group {
    margin-top: 1rem;
    height: 3.6rem;
  }

  .van-field__control {
    line-height: 3.6rem;
  }

  .van-cell {
    padding: 0 1.6rem;
  }

  .phone-input {
    margin-top: 1rem;
    display: flex;
    height: 3.8rem;
    justify-content: space-between;
  }
</style>
