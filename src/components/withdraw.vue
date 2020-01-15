<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto" class="withdrow-page">
    <div style="margin-top: 1.5rem;  margin-left:0.3rem;font-size: 1.2rem;color: #AFACB4">到账银行卡</div>
    <p v-if="banks.length === 0" style="text-align:center;font-size: 1.4rem">暂无取款银行卡，请先到银行账户添加！</p>
    <div class="content">
      <van-swipe :show-indicators="false" @change="onChange" :loop="false" :width="300">
        <van-swipe-item style=""
                        v-for="(item,index) in banks"
                        :key="index">
          <div class="info" v-show="haveCard"
               style="border: solid 0.1rem #43345d ; border-radius: 1rem;background: url('http://cloud.fhi365.cn:88/group1/M00/00/0D/rB8QsF4S_UuADjC_AAAw7TSoFOI571.png') center no-repeat;background-size: 100% 100%;">
            <div class="bank-name">
              <div>银行名称：<span>{{item.bankName | bankName}}</span></div>
            </div>
            <div>账号：<span>{{item.bankAccountNumber | account}}</span></div>
            <div>账户名：<span>{{item.bankAccountFullName}}</span></div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <van-button class="btn" style="background-color: black;margin-top: 0;background-color: #230F40;
        color:#FF6D44;border-color: #FF6D44   " icon="plus"
                  @click="add" v-if="banks.length === 0">添加资金账户
      </van-button>
    </div>
    <div style="margin-top: 1.5rem;  margin-left:0.6rem;font-size: 1.2rem;color: #7E7B83">提现金额</div>
    <div class="input">
      <div class="input-left-icon">
        <img src="../assets/image/yang.png" style="width: 1.2rem;margin-top: 0.7rem">
      </div>
      <div class="input-right">
        <van-field v-model="money" placeholder="0.00" type="number" size="large"
                   style="padding: 0.2rem 0.2rem ; background-color: #230F40;
                     border-bottom: solid 1px #483465; "/>
      </div>
    </div>
    <div style="margin-top: 1.5rem;  margin-left:0.6rem;font-size: 1.2rem;color: #7E7B83">输入密码</div>
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
      <van-button type="primary" size="large" color="#FF6D44" style="margin-top: 4rem;border-radius: 6px;width: 80%"
                  @click="handleWithdraw">提现
      </van-button>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {getListPlayerWithdrawAccounts, manualWithdraw, transfer} from "@/api/bank"
  import {queryPlayerBalance} from "@/api/user";
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        money: 0,
        password: '',
        haveCard: true,
        banks: [],
        totalMoney: 0,
        curr: 0,
        loading: false
      }
    },
    mounted() {
      this.getBank()
      this.getMainWallet()
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    methods: {
      add() {
        this.$router.push({path: '/bankAccount/addAccount'})
      },
      onChange(index) {
        this.curr = index
      },
      getBank() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token
        }
        this.loading = true
        getListPlayerWithdrawAccounts(data).then(res => {
          this.banks = res.result
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      },
      getMainWallet() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          refresh: 1
        }
        this.loading = true
        queryPlayerBalance(data).then(res => {
          console.log(res.result);
          let temp = res.result.mainwallet + res.result.subwallets[5593]
          this.money = parseInt(temp)
          this.totalMoney = temp
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      },
      handleWithdraw() {
        if (this.banks.length === 0) {
          this.$toast('请您先到银行账户添加取款银行卡！')
          return;
        }
        if (Number(this.money) < 100) {
          this.$toast('提款金额必须大于100！');
          return
        }
        if (Number(this.money) > Number(this.totalMoney)) {
          this.$toast('提款金额超过您的钱包余额!');
          return
        }
        if (this.password === '') {
          this.$toast('取款密码不能为空！')
          return;
        }
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          amount: this.money,
          withdrawal_password: this.password,
          bankDetailsId: this.banks[this.curr].playerBankDetailsId,
          bankTypeId: this.banks[this.curr].bankTypeId
        }
        let data1 = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
        }
        transfer(data1).then(res => {
          this.loading = true
          manualWithdraw(data).then(res => {
            this.$toast.success('提现成功！')
            this.$router.go(-1)
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 1rem;
    /*border-radius: 1rem;*/
  }

  .info {
    margin-right: 1rem;

    & > div {
      padding-left: 1rem;
    }
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
    color: white;
    height: 2.9rem;
    line-height: 2.9rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    font-size: 1.3rem;
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
