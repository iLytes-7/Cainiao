<template>
  <div class="page">
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
          <span style="color:#E6E2ED;font-size: 1.4rem">{{countName}}</span></div>
        <button v-clipboard:copy="countName"
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
        <div style="font-size: 1.3rem; color: #7E7B83">订单编号：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{orderNo}}</span></div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
    </div>
  </div>
</template>

<script src="vue-clipboard.min.js"></script>

<script>
    export default {
        data() {
            return {
                bankCard: '6222123487659876',
                countName: '二狗子',
                bankName: '中国银行',
                orderNo: '6225D45',
                value1: 0,
                option1: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 }
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
  .page {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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
