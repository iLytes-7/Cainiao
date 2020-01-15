<template>
  <div>
    <div class="accounts">
      <p v-if="withdrawBanks.length === 0" style="text-align:center;font-size: 2rem">暂无银行卡</p>
        <div style="margin-top: 1rem;font-size: 1.1rem;color: gainsboro">*修改或删除银行卡信息请联系在线客服</div>
      <div class="bank" v-for="(item,index) in withdrawBanks" :key="index">
        <div class="imgBox">
          <img src="../../assets/image/yllogo.png" alt="">
        </div>
        <div class="info">
          <p class="bankName">{{item.bankName | bankName}}</p>
          <p class="username">{{item.bankAccountFullName}}</p>
          <p class="accountNum">
            {{item.bankAccountNumber | account}}
          </p>
        </div>
      </div>
      <van-button class="btn" icon="plus" @click="add">添加取款银行卡</van-button>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>
<script>
    import {getBank, getListPlayerWithdrawAccounts} from "@/api/bank";
    import {mapGetters} from 'vuex'

    export default {
        name: "accountList",
        data() {
            return {
                active: 2,
                loading: false,
                banks: [],
                withdrawBanks: []
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        mounted() {
            this.getBank()
        },
        methods: {
            add() {
                this.$router.push({path: '/bankAccount/addAccount'})
            },
            go(item) {
                this.$router.push({path: '/bankAccount/detail', query: {backInfo: JSON.stringify(item)}})
            },
            getBank() {
                let data = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token: this.token
                }
                this.loading = true
                getBank(data).then(res => {
                    this.banks = res.result
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
                this.loading = true
                getListPlayerWithdrawAccounts(data).then(res => {
                    this.withdrawBanks = res.result
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }
        }

    }
</script>

<style scoped>
  .bank {
    border-radius: 0.5rem;
    padding: 2rem;
    background: url('http://cloud.fhi365.cn:88/group1/M00/00/0D/rB8QsF4S_UuADjC_AAAw7TSoFOI571.png') center no-repeat;
    background-size: 100% 100%;
    margin-top: 2rem;
  }

  .imgBox {
    float: left;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    /*background-color: #CAE7FA;*/
    position: relative;
  }

  .imgBox img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .info {
    margin-left: 5rem;
  }

  .info p {
    margin: 0px;
  }

  .info .bankName {
    font-size: 1.8rem;
  }

  .info .username {
    padding: 0.5rem 0rem;
  }

  .info .accountNum {
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  .info .accountNum span {
    margin-right: 1rem;
    font-size: 1.6rem;
  }

  .accounts .van-button {
    color: #FF6D44;
    background-color: transparent;
    border-color: #FF6D44;
    border-radius: 0.5rem;
  }

</style>
