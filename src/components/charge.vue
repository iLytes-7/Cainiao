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
        <div style="font-size: 1.3rem; color: #7E7B83">银行民称：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{bankName}}</span></div>
        <button v-clipboard:copy="bankName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="margin-top: 1rem;font-size: 1.3rem;color: #AFACB4">信息录入</div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">收款人姓名：
        </div>
        <van-field v-model="reciveName" style="width: 55%"/>
        <button v-clipboard:copy="reciveName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">转账金额：
        </div>
        <van-field v-model="chargeAmount" style="width: 55%"/>
        <button v-clipboard:copy="chargeAmount"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">存款人姓名：
        </div>
        <van-field v-model="saveName" style="width: 55%"/>
        <button v-clipboard:copy="saveName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <van-button type="primary" size="large" color="#FF6D44"
                style="margin-top: 2rem;border-radius: 5px;width: 100%; height: 4rem;margin-bottom: 10rem ">提交
    </van-button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                bankCard: '6222123487659876',
                bankName: '中国银行',
                reciveName: '',
                chargeAmount: '',
                saveName:'',
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
                Toast('复制成功');
            },
            // 复制失败
            onError(e) {
                alert("失败");
                Toast('复制失败');
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

  .charge-page .van-dropdown-menu {
    background-color: #291744;
  }

  .charge-page .van-hairline--top-bottom::after, .charge-page .van-hairline-unset--top-bottom::after {
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


  .charge-page .info-item .van-cell {
    background-color: #291744;
    padding-left: 0.1rem;
    padding-right: 1rem;
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
