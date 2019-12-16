<template>
  <div class="recharge">
    <div class="method">
      <p>充值方式</p>
      <ul>
        <li @click="selectMethod(index)" v-for="(item,index) in methodList" :key="index"
            :class="{liActive:index===curr}">
          <img src="../../assets/xxsz.png" alt="">
          <p v-if="index==4">传统转账</p>
          <p v-else>网银转账</p>
        </li>
      </ul>
      <div class="methodList">
        <van-radio-group v-model="methodRadio">
          <van-cell-group>
            <van-cell clickable v-for="(item,index) in method" :key="index" @click="selectMethodRadio(index)">
              <div slot="title" class="methodList-title">
                <img src="../../assets/xxsz.png" alt="">
                <span>{{item.name}}</span>
                <span>{{item.Limit}}</span>
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
      <van-button  v-if="curr==4" class="btn" color="#FF6D44" @click="goTraditional">立即存款</van-button>
      <van-button  v-else class="btn" color="#FF6D44" >立即存款</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "recharge",
        data() {
            return {
                curr: 0,
                amountcurr: 500,
                amount: 500,
                amountData: [50, 100, 500, 1000, 5000],
                methodRadio: 1,
                methodList: [0, 1, 2, 3, 4],
                method: [],
                method1: [
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'}
                ],
                method2: [
                    {name: '哈哈哈', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'}
                ],
                method3: [
                    {name: '支付宝', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'}
                ],
                method4: [
                    {name: '微信', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'},
                    {name: '银联云闪付', Limit: '单笔限额￥10-￥100000'}
                ],
            }
        },
        created() {
            this.method = this.method1
        },
        methods: {
            selectAmount(item) {
                this.amount = item;
                this.amountcurr = item;
            },
            selectMethod(index) {
                this.curr = index

                switch (index) {
                    case 0 :
                        this.method = this.method1
                        break
                    case 1 :
                        this.method = this.method2
                        break
                    case 2 :
                        this.method = this.method3
                        break
                    case 3 :
                        this.method = this.method4
                        break
                }
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
            goTraditional(){
                this.$router.push({path: "/charge"})
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
  }

  .methodList span:first-of-type {
    color: #FFFFFF;
  }
</style>
