<template>
  <div class="charge-page">
    <div style="margin-top: 1rem;font-size: 1.3rem;color: #AFACB4">商户银行</div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">账号：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{makeCardNum}}</span></div>
        <button v-clipboard:copy="bankCard"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">账户名：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{serviceCountName}}</span></div>
        <button v-clipboard:copy="serviceCountName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">银行民称：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{bankName}}</span></div>
        <button v-clipboard:copy="bankName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="margin-top: 1rem;font-size: 1.3rem;color: #AFACB4">商户银行</div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">订单编号：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{orderNo}}</span></div>
        <button v-clipboard:copy="orderNo"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="margin-top: 1rem;font-size: 1.3rem;color: #AFACB4">银行卡资料</div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #523F6D">请选择银行账户
          <span style="color:#E6E2ED;font-size: 1.4rem"></span></div>
        <van-dropdown-menu style="border: none;color: white">
          <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
      </div>
    </div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="input-info-item">
        <div style="font-size: 1.3rem; color: #523F6D;">银行账户名称：
          <span style="color:#E6E2ED;font-size: 1.4rem"></span></div>
        <van-field v-model="countName" style="width: 55%"/>
      </div>
    </div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="input-info-item">
        <div style="font-size: 1.3rem; color: #523F6D;">请输入银行名称：
          <span style="color:#E6E2ED;font-size: 1.4rem"></span></div>
        <van-field v-model="userbankName" style="width: 55%"/>
      </div>
    </div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="input-info-item">
        <div style="font-size: 1.3rem; color: #523F6D;">请填写充值日期：
          <span style="color:#E6E2ED;font-size: 1.4rem"></span></div>
        <van-field v-model="chargeDate" style="width: 55%"/>
      </div>
    </div>
    <div style="margin-top: 1rem;font-size: 1.1rem;color: #AFACB4">充值留言</div>
    <van-field
      v-model="remarks"
      rows="1"
      type="textarea"
      placeholder="请输入留言内容"
      style="margin-top: 1rem;font-size: 1rem;color: #523F6D"
    />
    <van-button type="primary" size="large" color="#FF6D44"
                style="margin-top: 2rem;border-radius: 5px;width: 100%; height: 4rem;margin-bottom: 10rem ">提交验证
    </van-button>
  </div>
</template>

<script src="vue-clipboard.min.js"></script>

<script>
    export default {
        data() {
            return {
                bankCard: '6222123487659876',
                serviceCountName: '二狗子',
                bankName: '中国银行',
                orderNo: '6225D45',
                countName: '',
                userbankName:'',
                chargeDate:'',
                value1: 0,
                remarks: '',
                option1: [
                    {text: '中国银行', value: 0},
                    {text: '工商银行', value: 1},
                    {text: '农业银行', value: 2}
                ],
            }
        },
        computed: {
            makeCardNum: function () {
                // 6222 **** **** 9876
                var display = this.bankCard.substring(0, 4) + ' **** **** ' + this.bankCard.substring(this.bankCard.length - 4)
                return display
            }
        },
        methods: {
            // 复制成功
            onCopy(e) {
                console.log(e);
            },
            // 复制失败
            onError(e) {
                alert("失败");
            },
        }
    }
</script>

<style scoped>
  .charge-page {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .van-dropdown-menu {
    background-color: #291744;
  }

  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width: 0;
  }

  .info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.2rem;
    height: 3.8rem;
    line-height: 3.8rem;
    justify-content: space-between;
    border-bottom: solid 1px #33204D;
  }

  .input-info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.2rem;
    height: 3.8rem;
    line-height: 3.8rem;

    border-bottom: solid 1px #33204D;
  }

  .van-cell {
    background-color: #291744;
  }

  button {
    background-color: #32204C;
    color: #FFFFFF;
    border: none;
    height: 2.3rem;
    line-height: 2.3rem;
    padding: 0 1rem;
  }

  button:active {
    background-color: #33204D;
    transform: translateY(2px);
  }

</style>
