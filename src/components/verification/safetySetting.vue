<template>
  <div class="verification" style="width: 100%;margin-left: auto;margin-right: auto">
    <div class="content">
      <div class="info-row">
        <router-link to="/safety-setting/real-name">
        <div class="info-item">真实姓名验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">已认证</div>
          <van-icon name="arrow"/>
        </div>
        </router-link>
      </div>
      <div class="info-row">
        <div class="info-item">资金来源证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">已认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">存款证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">地址证明</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width:100%;background-color: #291744">
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <router-link to="/safety-setting/test-phone">
        <div class="info-item">手机号码验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
        </router-link>
      </div>
      <div class="info-row">
        <div class="info-item">邮箱验证</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width: 100%;background-color: #291744">
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <div class="info-item">登陆密码</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">取款密码</div>
        <div style="display: flex;align-items: center">
          <div class="info-status havenot">未认证</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="height: 0.7rem;width:100%;background-color: #291744">
    </div>
    <div class="logout" @click="logout">退出登录</div>
    <div style="height: 0.7rem;width:100%;background-color: #291744">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      logout() {
        this.$router.push({path: "/login"})
      }
    }
  }
</script>

<style scoped>
  .verification a{
    width: 100%;
    color: white !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    line-height: 3rem;
  }
  .logout {
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
    height: 4.5rem;
    line-height: 4.5rem;
    border-bottom: solid 1px #291744;
    padding: 0 1rem;
  }

  .info-item {
    font-size: 1.4rem;
    margin-left: 1rem;
    color: #AFACB4;

  }

  .info-status {
    font-size: 1.1rem;
    margin-right: 1rem;
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
