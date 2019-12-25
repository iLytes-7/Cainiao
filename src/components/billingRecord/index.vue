<template>
  <div class="bill">
    <van-dropdown-menu active-color="#FF6D44" :close-on-click-outside="false"
                       style="background-color: #291744;border-radius: 0 0 1rem 1rem;width: 100vw;margin-left:-5vw;position: sticky;top: 46px;z-index: 9">
      <van-dropdown-item title="账单类别" ref="type">
        <div class="btnGroup">
          <van-button type="default" @click="onConfirm('cashback')" :class="{ literBtn: trans_type=='cashback' }">返还
          </van-button>
          <van-button type="default" @click="onConfirm('deposit')" :class="{ literBtn: trans_type=='deposit' }">充值
          </van-button>
          <van-button type="default" @click="onConfirm('withdrawal')" :class="{ literBtn: trans_type=='withdrawal' }">
            取款
          </van-button>
          <van-button type="default" @click="onConfirm('transfer')" :class="{ literBtn: trans_type=='transfer' }">转账
          </van-button>
          <van-button type="default" @click="onConfirm('promo')" :class="{ literBtn: trans_type=='promo' }">促销
          </van-button>
          <van-button type="default" @click="onConfirm('game')" :class="{ literBtn: trans_type=='game' }">游戏
          </van-button>
        </div>
        <div>
          <p class="filter">时间:</p>
          <div class="timebox">
            <van-field v-model="startTime"
                       readonly="readonly"
                       @click="startTimePop = true" placeholder="请输入开始时间"/>
            <van-field v-model="endTime"
                       readonly="readonly"
                       @click="endTimePop = true" placeholder="请输入结束时间"/>
          </div>
        </div>
        <van-button class="btn" color="#FF6D44" @click="handleFilter">查询</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="billList">
      <div class="billBox" style="position: sticky;top: 100px;background-color: #230F40;z-index: 0">
        <div class="billTitle">名称</div>
        <div class="price">金额</div>
        <div class="type">记录</div>
      </div>
      <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(item,index) in list" :key="index">
          <div class="billBox" v-if="trans_type == 'cashback'">
            <div class="billTitle">{{item.game_name}}</div>
            <div class="price">¥ {{item.amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
          <div class="billBox" v-if="trans_type == 'deposit'">
            <div class="billTitle">{{item.pay_type}}</div>
            <div class="price">¥ {{item.amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
          <div class="billBox" v-if="trans_type == 'withdrawal'">
            <div class="billTitle">{{item.pay_type}}</div>
            <div class="price">¥ {{item.amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
          <div class="billBox" v-if="trans_type == 'transfer'">
            <div class="billTitle">{{item.transaction_type}}</div>
            <div class="price">¥ {{item.amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
          <div class="billBox" v-if="trans_type == 'promo'">
            <div class="billTitle">{{item.promo_name}}</div>
            <div class="price">¥ {{item.bonus_amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
          <div class="billBox" v-if="trans_type == 'game'">
            <div class="billTitle">{{item.game_name}}</div>
            <div class="price">¥ {{item.bet_amount | amount}}</div>
            <div class="type">{{trans_type | billCategory}}</div>
          </div>
        </div>
      </van-list>
    </div>
    <van-popup v-model="startTimePop" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate_start"
        type="date"
        :max-date="maxDate"
        @cancel="startTimePop = false"
        @confirm="startTimeChange"
      />
    </van-popup>
    <van-popup v-model="endTimePop" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate_end"
        type="date"
        :max-date="maxDate"
        @cancel="endTimePop = false"
        @confirm="endTimeChange"
      />
    </van-popup>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {getPlayerReports} from '@/api/bill';
  import {mapGetters} from 'vuex'

  export default {
    name: "index",
    data() {
      return {
        startTime: '',
        currentDate_end: new Date(),
        trans_type: 'cashback',
        loading: false,
        listLoading: false,
        startTimePop: false,
        currentDate_start:'',
        endTime: '',
        endTimePop: false,
        list: [],
        maxDate: new Date(),
        finished: false,
        offset: -20
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    mounted() {
      let y = new Date().getFullYear();
      this.currentDate_start = new Date(y,0)
      this.startTime = new Date().getFullYear() + '-01-01'
      this.endTime = JSON.stringify(new Date()).substr(1,10)
    },
    methods: {
      onConfirm(item) {
        // this.$refs.type.toggle();
        this.trans_type = item
      },
      onLoad() {
        this.getList()
      },
      handleFilter() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          trans_type: this.trans_type,
          time_from: this.startTime,
          time_to: this.endTime,
          limit: 20,
          offset: 0
        }
        this.loading = true
        this.list = []
        this.offset = 20
        getPlayerReports(data).then(response => {
          this.list = response.result?response.result:[]
          this.$refs.type.toggle();
          this.loading = false
          this.finished = false
        }).catch(()=>{
          this.loading = false
          this.finished = false
        })
      },
      getList() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          trans_type: this.trans_type,
          time_from: this.startTime,
          time_to: this.endTime,
          limit: 20,
          offset: this.offset+=20
        }
        this.loading = true
        getPlayerReports(data).then(response => {
          this.listLoading = false
          if(response.result){
            this.list = this.list.concat(response.result)
          }else {
            this.finished = true
          }
          this.loading = false
        }).catch(()=>{
          this.loading = false
        })
      },
      endTimeChange(value) {
        var date = value;
        var m = date.getMonth() + 1;
        var d = date.getDate();
        if (m >= 1 && m <= 9) {
          m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
          d = "0" + d;
        }
        const timer = date.getFullYear() + "-" + m + "-" + d
        this.endTime = timer
        this.endTimePop = false
      },
      startTimeChange(value) {
        var date = value;
        var m = date.getMonth() + 1;
        var d = date.getDate();
        if (m >= 1 && m <= 9) {
          m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
          d = "0" + d;
        }
        const timer = date.getFullYear() + "-" + m + "-" + d
        this.startTime = timer
        this.startTimePop = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bill {
    width: 90%;
    margin: auto;

    .van-cell {
      background-color: #403157;
    }

    .btn {
      width: 90% !important;
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-bottom: 3rem;
    }

    .literBtn {
      border-color: rgb(255, 109, 68) !important;
      color: rgb(255, 109, 68);
    }

    .btnGroup button[data-v-32868362] {
      border: solid 1px #403157;
    }
  }

  .bill .van-hairline--top-bottom::after, .bill .van-hairline-unset--top-bottom::after {
    border: none;
  }

  .billBox {
    display: flex;
    border-bottom: 1px solid #291744;
    height: 4.5rem;
    line-height: 4.5rem;
    font-size: 1.3rem;
    color: #AFACB4;
  }

  .billBox .billTitle {
    width: 55%;
  }

  .billBox .price {
    width: 30%;
  }

  .billBox .type {
    width: 15%;
    text-align: right;
  }

  .btnGroup {
    display: grid;
    width: 94%;
    margin: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, 30vw);
  }

  .btnGroup button {
    margin-bottom: 1rem;
    background-color: #403157;
    color: #AFACB4;
    border: none;
    border-radius: 0.5rem;
  }

  .filter {
    font-size: 1.5rem;
    width: 94%;
    color: #AFACB4;
    padding-bottom: 1rem;
    margin: auto;
  }

  .stauts {
    width: 50vw;
  }

  .bill .van-dropdown-menu__item {
    width: 23%;
  }

  .timebox {
    display: flex;
    width: 94%;
    margin: auto;
    justify-content: space-between;

    div {
      width: 48%;
    }
  }

</style>
