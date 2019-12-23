<template>
  <div class="bill">
    <van-dropdown-menu active-color="#FF6D44" style="background-color: #291744;border-radius: 0 0 1rem 1rem;width: 100vw;margin-left:-5vw;position: sticky;top: 46px;">
      <van-dropdown-item title="账单类别" ref="type">
        <div class="btnGroup">
          <van-button type="default" @click="onConfirm('cashback')">返还</van-button>
          <van-button type="default" @click="onConfirm('deposit')">充值</van-button>
          <van-button type="default" @click="onConfirm('withdrawal')">取款</van-button>
          <van-button type="default" @click="onConfirm('transfer')">转账</van-button>
          <van-button type="default" @click="onConfirm('promo')">促销</van-button>
          <van-button type="default" @click="onConfirm('game')">游戏</van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="billList">
      <div class="billBox">
        <div class="billTitle">名称</div>
        <div class="price">金额</div>
        <div class="type">记录</div>
      </div>
      <div class="billBox" v-for="item in 20" :key="item">
        <div class="billTitle">T1  王者联盟</div>
        <div class="price">¥ 0.00</div>
        <div class="type">转账</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      onConfirm(item) {
        console.log(item);
        this.$refs.type.toggle();
      },
      time() {
        this.$refs.time.toggle();
      },
      log() {
        this.$refs.log.toggle();
      }
    }
  }
</script>

<style scoped>
.bill{
width: 90%;
  margin: auto;

}
  .bill .van-hairline--top-bottom::after,.bill .van-hairline-unset--top-bottom::after{
    border: none;
  }
  .billBox{
    display: flex;
    border-bottom: 1px solid #291744;
    height: 4.5rem;
    line-height: 4.5rem;
    font-size: 1.3rem;
    color: #AFACB4;
  }
  .billBox .billTitle{
    width: 55%;
  }
.billBox .price{
  width: 30%;
}
.billBox .type{
  width: 15%;
  text-align: right;
}
.btnGroup{
  display: grid;
  width: 94%;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, 30vw);
}
  .btnGroup button{
    margin-bottom: 1rem;
    background-color: #403157;
    color: #AFACB4;
    border: none;
    border-radius: 0.5rem;
  }
  .filter{
    font-size: 1.5rem;
    width: 94%;
    color: #AFACB4;
    padding-bottom: 1rem;
    margin: auto;
  }
  .stauts{
    width: 50vw;
  }
  .bill .van-dropdown-menu__item{
    width: 23%;
  }
</style>
