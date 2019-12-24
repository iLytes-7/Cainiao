<template>
  <div class="recharge">
    <div class="method">
      <p>充值方式</p>
      <ul>
        <li @click="selectAutoMethod(index)" v-for="(item,index) in totalMethodList" :key="index"
            :class="{liActive:index===autoCurr}">
          <img src="../../assets/image/xxsz.png" alt="">
          <p>{{item.category_text}}</p>
        </li>
      </ul>
      <div class="methodList">
        <van-radio-group v-model="methodRadio">
          <van-cell-group>
            <van-cell clickable v-for="(item,index) in tempList.list" :key="index"
                      @click="selectMethodRadio(index)">
              <div slot="title" class="methodList-title">
                <img src="../../assets/image/xxsz.png" alt="">
                <span style="max-width: 37%;display:inline-block;overflow: hidden;height: 2rem;white-space:nowrap;
    text-overflow: ellipsis;">{{item.bank_name_local
                  }}</span>
                <span>单比限额 ¥{{item.minDeposit}}-¥{{item.maxDeposit}}</span>
              </div>
              <van-radio checked-color="#FF6D44" slot="right-icon" :name="index"/>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="transferAmount">
        <p>转账金额（元）</p>
        <van-field v-model="amount" placeholder="" @input="change">
          <div slot="label" style="text-align: right">￥</div>
        </van-field>
        <div class="amountList">
          <div v-for="(item,index) in amountData" :key="item" :class="{amountActive:item==amountcurr}"
               @click="selectAmount(item)">
            {{item}}元
          </div>
        </div>
      </div>
<!--      <van-button  v-if="curr==4" class="btn" color="#FF6D44" @click="goTraditional">立即存款</van-button>-->
      <van-button  class="btn" color="#FF6D44" @click="handleCharge">立即存款</van-button>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import { depositPaymentCategories,thirdPartyDepositForm } from '@/api/recharge';
    import {mapGetters} from 'vuex'
    export default {
        name: "recharge",
        data() {
            return {
                autoCurr: 0,
                // manualCurr:0,
                amountcurr: 500,
                tempList:[],
                amount: 500,
                loading:false,
                amountData: [50, 100, 500, 1000, 5000],
                methodRadio: 0,
                autoMethodList: [],
                totalMethodList:[],
                manualMethodList:[],
                method: [],
            }
        },
        created() {
            this.method = this.method1
            let data = {
                api_key: "ea443b05c7067089bd2716f47257ee73",
                username: this.name,
                token:this.token
            }
            this.loading = true
            depositPaymentCategories(data).then(response => {
                console.log(response);
                this.autoMethodList = response.result.payment_cats.auto
                this.totalMethodList = this.autoMethodList
                this.manualMethodList = response.result.payment_cats.manual
                this.totalMethodList = this.totalMethodList.concat(this.manualMethodList)
                this.tempList = this.totalMethodList[0]
                this.loading = false
            })
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        methods: {
            selectAmount(item) {
                this.amount = item;
                this.amountcurr = item;
            },
            selectAutoMethod(index) {
                this.autoCurr = index
                this.methodRadio = 0
                this.tempList = this.totalMethodList[index]
            },
            change(val) {
                const x = this.amountData.find(item => {
                    return item == val
                })
                if (x) {
                    this.amountcurr = x
                } else {
                    this.amountcurr = -1
                }
            },
            selectMethodRadio(item) {
                console.log(item);
                this.methodRadio = item;
            },
            handleCharge(){
                let length = this.autoMethodList.length
                if (this.autoCurr<length){
                    if (this.amount > this.tempList.list[this.methodRadio].maxDeposit){
                        this.$toast('该种方式单比限额上限为¥'+ this.tempList.list[this.methodRadio].maxDeposit);
                        return
                    }
                    if (this.amount < this.tempList.list[this.methodRadio].minDeposit){
                        this.$toast('该种方式单比限额下限为¥'+ this.tempList.list[this.methodRadio].minDeposit);
                        return
                    }
                    let data = {
                        api_key: "ea443b05c7067089bd2716f47257ee73",
                        username: this.name,
                        token:this.token,
                        bankTypeId: this.tempList.list[this.methodRadio].bankTypeId
                    }
                    this.loading = true
                    thirdPartyDepositForm(data).then(response => {
                        this.$toast.success("充值成功！")
                        this.loading = false
                    })
                }else{
                    this.$router.push({path: "/charge"})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .recharge {
    ul {
      overflow-x: auto;
      list-style: none;
      white-space: nowrap;
      color: #AFACB4;
      height: 9rem;

      li {
        width: 7rem;
        padding: 1rem 1rem 0rem;
        margin-right: 1.5rem;
        margin-left: 0;
        border: 0.1rem solid #32204C;
        display: inline-block;
        text-align: center;
        background-color: #32204C;
        border-radius: 0.5rem;


        &:last-of-type {
          margin-right: 0.5rem;
        }
      }
    }

    .liActive {
      border-color: #FF6D44 !important;
    }

    .amountList .amountActive {
      border-color: #FF6D44 !important;
      color: #FF6D44;
    }
  }

  li > p {
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    color: #AFACB4;
  }

  li > img {
    width: 3rem;
  }

  .method > p {
    font-size: 1.5rem;
    color: #AFACB4;
  }

  .transferAmount > p {
    font-size: 1.2rem;
    color: #AFACB4;
  }

  .amountList {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .amountList > div {
    width: 18%;
    text-align: center;
    background-color: #32204C;
    border-radius: 0.3rem;
    padding: 0.5rem 0rem;
    color: #AFACB4;
    border: 0.1rem solid #32204C;
  }

  .methodList {
    margin: 3rem 0rem;
  }

  .methodList-title {
    line-height: 3rem;
    position: relative;
    font-size: 1.1rem;
  }

  .methodList-title img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 2rem;
  }

  .methodList-title span {
    margin-left: 3rem;
    color: #7E7B83;
  }

  .methodList-title span:last-of-type {
    float: right;
    margin-right: 1rem;
    margin-left: 0;
  }

  .methodList span:first-of-type {
    color: #FFFFFF;
  }
</style>
