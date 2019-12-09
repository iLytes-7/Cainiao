<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto">
    <div class="content">
      <div class="info-row">
        <div class="info-item">真实姓名验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">已认证</div>
          <img src="../assets/logo.png" alt="">
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">资金来源证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">已认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">存款证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">地址证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width: 110vw;background-color: #291744;margin-left: -2rem">
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <div class="info-item">手机号码验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">邮箱验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width: 110vw;background-color: #291744;margin-left: -2rem">
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <div class="info-item">登陆密码</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">取款密码</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width: 110vw;background-color: #291744;margin-left: -2rem">
    </div>
    <div class="logout">退出登录</div>
    <div style="height: 0.7rem;width: 110vw;background-color: #291744;margin-left: -2rem">
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .logout{
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: #AFACB4;
  }
  .content {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    line-height: 3rem;
    border-bottom: solid 1px #291744;
  }

  .info-item {
    font-size: 1.4rem;
    margin-left: 1rem;
    color: #AFACB4;
  }

  .info-status {
    font-size: 1.1rem;
  }

  .have {
    color: #7E7B83;
  }

  .havenot {
    color: #E6E2ED;
  }

  .info-row img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.7rem;
  }
</style>
