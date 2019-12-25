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
        <div style="font-size: 1.3rem; color: #7E7B83">银行名称：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{bankName}}</span></div>
        <button v-clipboard:copy="bankName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">支行：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{branch}}</span></div>
        <button v-clipboard:copy="bankName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
      <div class="info-item">
        <div style="font-size: 1.3rem; color: #7E7B83">提案号：
          <span style="color:#E6E2ED;font-size: 1.4rem">{{secure_id}}</span></div>
        <button v-clipboard:copy="bankName"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制
        </button>
      </div>
    </div>
    <div style="margin-top: 1rem;font-size: 1.3rem;color: #AFACB4">信息录入</div>
    <div style="background-color: #291744;margin-top: 1rem;border: solid 1px #32204C;border-radius: 4px">
      <div class="info-item1">
        <div style="font-size: 1.3rem; color: #7E7B83">转账金额：
        </div>
        <van-field v-model="chargeAmount" style="width: 55%"/>
      </div>
    </div>
    <div style="color: #AFACB4; margin-top: 0.5rem">单笔限额：¥{{this.minDeposit}}-{{this.maxDeposit}}</div>
    <van-button type="primary" size="large" color="#FF6D44" @click="handleSubmit"
                style="margin-top: 2rem;border-radius: 5px;width: 100%; height: 4rem;margin-bottom: 10rem ">提交
    </van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import { manualDepositForm ,manualDepositRequest} from '@/api/recharge';
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                bankCard: '6222123487659876',
                bankName: '中国银行',
                branch:'',
                loading:false,
                maxDeposit:'',
                minDeposit:'',
                secure_id:'',
                bankTypeId:'',
                chargeAmount: 0,
            }
        },
        created(){
            this.chargeAmount = this.$route.query.chargeAmount
            this.bankTypeId = this.$route.query.bankTypeId
            let data = {
                api_key: "ea443b05c7067089bd2716f47257ee73",
                username: this.name,
                token: this.token,
                bankTypeId: this.bankTypeId
            }
            this.loading = true
            manualDepositForm(data).then(response => {
                console.log(response.result);
                this.bankName = response.result.bank
                this.bankCard = response.result.account_number
                this.branch = response.result.branch
                this.maxDeposit = response.result.maxDeposit
                this.minDeposit = response.result.minDeposit
                this.secure_id = response.result.secure_id
                this.loading = false
            }).catch(() => {
                this.loading = false
            })

        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ]),
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
            handleSubmit(){
                if (Number(this.chargeAmount) > this.maxDeposit ||Number(this.chargeAmount) < this.minDeposit){
                    this.$toast('请填写该种方式限额内的提款金额');
                    return
                }
                let data = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token: this.token,
                    bankTypeId: this.bankTypeId,
                    secure_id:this.secure_id,
                    amount:this.chargeAmount
                }
                this.loading = true
                manualDepositRequest(data).then(response => {
                    this.$toast.success("充值成功！")
                    this.$router.go(-1);
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })

            }
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
  .info-item1{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.2rem;
    height: 3.8rem;
    line-height: 3.8rem;
    border-bottom: solid 1px #33204D;
  }
  .charge-page .info-item1 .van-cell {
    background-color: #291744;
    padding-left: 1rem;
    padding-right: 1rem;
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
