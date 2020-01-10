<template>
  <div class="verification" style="width: 100%;margin-left: auto;margin-right: auto">
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <router-link to="/login/updatePassword">
          <div class="info-item">修改登陆密码</div>
          <div style="display: flex;align-items: center">
            <van-icon name="arrow"/>
          </div>
        </router-link>
      </div>
      <div class="info-row" @click="editTel">
          <div class="info-item">修改绑定手机号码</div>
          <div style="display: flex;align-items: center">
            <van-icon name="arrow"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            editTel(){
                this.$dialog.confirm({
                    title: '提示!',
                    message: '手机号码需要联系客服进行修改，您是否去联系客服修改手机号码？'
                }).then(() => {
                    window.location.href='https://chat.liveneed.net/chat/Hotline/channel.jsp?cid=5052195&cnfid=42351&j=7220487914&s=1'
                }).catch(() => {
                });
            }
        }
    }
</script>

<style scoped>
  .verification a {
    width: 100%;
    color: white !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    line-height: 3rem;
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
