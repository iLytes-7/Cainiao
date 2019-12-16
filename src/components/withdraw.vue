<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto" class="withdrow-page">
    <div style="margin-top: 1.5rem;  margin-left:0.3rem;font-size: 1.2rem;color: #AFACB4">到账银行卡</div>
    <div class="content">
      <div class="info" v-show="haveCard">
        <div class="bank-name">
          <div>银行名称：<span>中国银行</span></div>
          <van-icon name="arrow" />
        </div>
        <div>账号：<span>6222 **** **** 8521</span></div>
        <div>账户名：<span>李二狗</span></div>
      </div>
      <van-button  class="btn" style="background-color: black;margin-top: 0;background-color: #230F40;
        color:#FF6D44;border-color: #FF6D44   " icon="plus"
                  @click="add" v-show="!haveCard">添加资金账户
      </van-button>
    </div>
    <div style="margin-top: 1.5rem;  margin-left:0.6rem;font-size: 1.2rem;color: #7E7B83">单比限额 ¥10 - ¥100000</div>
    <div class="input">
      <div class="input-left-icon">
        <img src="../assets/yang.png" style="width: 1.2rem;margin-top: 0.7rem">
      </div>
      <div class="input-right">
        <van-field v-model="money" placeholder="0.00" type="number" size="large"
                   style="padding: 0.2rem 0.2rem ; background-color: #230F40;
                     border-bottom: solid 1px #483465; "/>
      </div>
    </div>
    <div style="margin-top: 1.5rem;  margin-left:0.6rem;font-size: 1.2rem;color: #7E7B83">输入密码 </div>
    <div class="input">
      <div class="input-left-icon">
      </div>
      <div class="input-right">
        <van-field v-model="password" placeholder="密码" type="password" size="large"
                   style="padding: 0.2rem 0.2rem ; background-color: #230F40;
                     border-bottom: solid 1px #483465; "/>
      </div>
    </div>
    <div style="text-align: center">
      <van-button type="primary" size="large" color="#FF6D44" style="margin-top: 4rem;border-radius: 6px;width: 80%">提现
      </van-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                money: 543012.00,
                password:'',
                haveCard:true,
            }
        },
        methods:{
            add() {
                this.$router.push({path:'/bankAccount/addAccount'})
            },
        }
    }
</script>

<style scoped>
  .content {
    margin-top: 1rem;
    background-color: #291744;
    border-radius: 1rem;
  }

  .info {
    padding: 0.8rem 1.5rem;
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

  .info > div {
    color: #AFACB4;
    height: 2.9rem;
    line-height: 2.9rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    font-size: 1.6rem;
  }

  .info > div span {
    color: #E6E2ED;
  }

  .bank-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bank-name img {
    width: 1.5rem;
  }


</style>
