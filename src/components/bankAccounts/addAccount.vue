<template>
  <div class="addAccount">
    <van-cell-group class="form">
      <van-field readonly required v-model="form.bankName" label="银行：" placeholder="请选择银行" @click="show = true"/>
      <van-field required disabled="true" v-model="form.bankAccName" label="账户名：" placeholder="请输入账户名" />
      <van-field required type="number" v-model="form.bankAccNum" label="账号：" placeholder="请输入账号"/>
      <van-field v-model="form.province" label="开户省：" placeholder="请输入开户省"/>
      <van-field v-model="form.city" label="开户市：" placeholder="请输入开户市"/>
      <van-field v-model="form.branch" label="分行名称：" placeholder="请输入分行名称"/>
      <van-field v-model="form.phone" label="分行电话：" placeholder="请输入分行电话">
        <!--<van-button class="codeBtn" slot="button" size="small" type="primary">发送验证码</van-button>-->
      </van-field>
      <!--<van-field v-model="form.phone" label="验证码：" placeholder="请输入验证码"/>-->
    </van-cell-group>
    <van-button class="btn" color="#FF6D44" @click="submit">提交卡号</van-button>
    <van-popup v-model="show" position="bottom" :style="{ height: '35%' }">
      <van-picker show-toolbar title="选择银行" :columns="columns" @cancel="onCancel" @confirm="onConfirm"/>
    </van-popup>
    <loading :show="loading"></loading>
  </div>
</template>
<script>
    import {queryDepositWithdrawalAvailableBank, addPlayerWithdrawAccount} from "@/api/bank";
    import {getPlayerProfile} from '@/api/user';
    import {mapGetters} from 'vuex'

    export default {
        name: "addAccount",
        data() {
            return {
                form: {
                    phone: '',
                    bankTypeId: '',
                    bankAccNum: '',
                    bankAccName: '',
                    province: '',
                    city: ''
                },
                columns: [],
                show: false,
                loading: false
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        mounted() {
            this.getQueryDepositWithdrawalAvailableBank()
            let data = {
                api_key: 'ea443b05c7067089bd2716f47257ee73',
                username: this.name,
                token: this.token
            }
            getPlayerProfile(data).then(res => {
                let userinfo = res.result
                this.form.bankAccName = userinfo.firstName
            }).catch(() => {
            })
        },
        methods: {
            submit() {
                if (this.form.bankName === '') {
                    this.$toast('请选择银行')
                    return
                }
                if (this.form.bankAccName === '') {
                    this.$toast('请输入账户名')
                    return
                }
                if (this.form.bankAccNum === '') {
                    this.$toast('请输入账号')
                    return
                }
                let data = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token: this.token,
                    bankTypeId: this.form.bankTypeId,
                    bankAccNum: this.form.bankAccNum,
                    bankAccName: this.form.bankAccName,
                    province: this.form.province,
                    city: this.form.city,
                    branch: this.form.branch,
                    phone: this.form.phone
                }
                this.loading = true
                addPlayerWithdrawAccount(data).then(res => {
                    this.$toast('新增银行卡成功！！')
                    // this.$router.push({path: '/bankAccount/accountList'})
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            getQueryDepositWithdrawalAvailableBank() {
                let data = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token: this.token
                }
                this.loading = true
                queryDepositWithdrawalAvailableBank(data).then(res => {
                    this.bankTypeIds = res.result
                    this.bankTypeIds.forEach(item => {
                        const x = JSON.parse(item.bankName.substr(6))
                        if (item.enabled_withdrawal === '1' && item.enabled_deposit === '0') {
                            this.columns.push(x[2])
                        }
                    })
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            onConfirm(value, index) {
                this.bankTypeIds.find((item, index1) => {
                    if (index1 == index) {
                        this.form.bankName = value
                        this.form.bankTypeId = item.bankTypeId
                    }
                })
                this.show = false
            },
            onCancel() {
                this.show = false
            }
        }
    }
</script>

<style>
  .addAccount {
    margin-top: 2rem;
  }

  .addAccount .form {
    background-color: #291744;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .addAccount .form::after {
    border: none;
  }

  .addAccount .form > div {
    background-color: transparent;
  }

  .addAccount .form .van-cell {
    color: #AFACB4;
    font-size: 1.3rem;
    border-bottom: 1px solid #352251;
  }

  .addAccount .form .van-cell:last-of-type {
    border: none;
  }

  .addAccount .form .van-cell .van-field__control {
    font-size: 1.3rem;
  }

  .addAccount .form .codeBtn {
    color: #FF6D44;
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
  }
</style>
