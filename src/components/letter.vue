<template>
  <div>
    <div class="head">
      <div>主题</div>
      <div>信息</div>
      <div>时间</div>
    </div>
    <div style="height: 0.3rem;width: 100%"></div>
    <div class="content">
      <div><p style="width: 35%; font-size: 1.1rem;text-align: center;font-weight: 600">新用户享好礼</p></div>
      <div><p style="width: 80%; font-size: 1.1rem;color: #AFACB4"
              class="van-multi-ellipsis--l3">系统显萨达萨达萨达萨达萨达示您是平台新用户首次注册10
        元大礼包</p></div>
      <div><p style="width: 30%; font-size: 1.1rem;text-align: center;color: #AFACB4">2019 12-05</p></div>
    </div>
    <div class="content">
      <div><p style="width: 35%; font-size: 1.1rem;text-align: center;font-weight: 600">新用户享好礼</p></div>
      <div><p style="width: 80%; font-size: 1.1rem;color: #AFACB4"
              class="van-multi-ellipsis--l3">系统显萨达萨达萨达萨达萨达示您是平台新用户首次注册10
        元大礼包</p></div>
      <div><p style="width: 30%; font-size: 1.1rem;text-align: center;color: #AFACB4">2019 12-05</p></div>
    </div>
    <div class="content">
      <div><p style="width: 35%; font-size: 1.1rem;text-align: center;font-weight: 600">新用户享好礼</p></div>
      <div><p style="width: 80%; font-size: 1.1rem;color: #AFACB4"
              class="van-multi-ellipsis--l3">系统显萨达萨达萨达萨达萨达示您是平台新用户首次注册10
        元大礼包</p></div>
      <div><p style="width: 30%; font-size: 1.1rem;text-align: center;color: #AFACB4">2019 12-05</p></div>
    </div>
    <div style="margin-top: 5rem">
      <div class="btn">
        <img src="../assets/logo.png">
      </div>
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
  .head {
    text-align: center;
    margint-top: 2rem;
    width: 100%;
    display: flex;
    background-color: #291744;
    justify-content: space-between;
    margin-top: 0.6rem;
    line-height: 2.7rem;
    color:#7E7B83;
  }

  .btn {
    position: relative;
    background-color: #FF6D44;
    margin: auto;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
  }

  .btn > img {
    position: absolute;
    width: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .head > div {
    width: 33%;
  }

  .content {
    align-items: center;
    padding: 0.9rem 0;
    width: 100%;
    display: flex;
    background-color: #291744;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .content > div {
    width: 33%;
  }

  .content p {
    margin-right: auto;
    margin-left: auto;

  }
</style>
