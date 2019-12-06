<template>
  <div class="page">
    <div class="cuxiao">
      <div class="category">
        <div class="game" v-bind:class="{ active: showGameCategory,'gamedown':showGameCategory }"
             @click="downGame">游戏分类
        </div>
        <div class="date" v-bind:class="{ active: showTaskCategory,'datedown':showTaskCategory }"
             @click="downTask">任务
        </div>
      </div>
        <div v-show="ifshow">
          <div style="margin-top: 1.4rem;font-size: 1.6rem;color: #AFACB4">快捷筛选</div>
          <div class="kind">
            <div>电子竞技</div>
            <div>老虎机</div>
            <div>VIP优惠</div>
            <div>体育</div>
            <div>真人</div>
            <div>彩票</div>
            <div style="width: 50%">全部游戏</div>
          </div>
        </div>
      <div v-show="typeShow">
        <div style="margin-top: 1.4rem;font-size: 1.6rem;color: #AFACB4">快捷筛选</div>
        <div class="kind">
          <div>adad</div>
          <div>dada</div>
          <div>ad</div>
          <div>体育</div>
          <div>真人</div>
          <div>彩票</div>
          <div style="width: 50%">全部游戏</div>
        </div></div>
      <van-collapse v-model="activeNames" class="collapse" accordion :class="{showModel:!ifshow}">
        <van-collapse-item :name="item" :is-link="false" class="collapseBox" v-for="item in 3" :key="item">
          <div slot="title" class="collapseBox-head">
            <img src="../assets/adv1.jpeg">
            <p class="collapseBox-title">
              <span>2019年10月现金回馈</span>
              <span>有效期：2019-12-31</span>
            </p>
          </div>
          <div slot="default">
            活动内容：啊发发发发发发嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎哈哈哈哈法国军方高级
            <van-button round color="#6149f6" class='collapseBox-btn' plain @click="apply">立即申请</van-button>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showGameCategory: false,
        showTaskCategory: false,
        show: false,
        ifshow: true,
        typeShow: false,
        activeNames: ['0']
      }
    },
    methods: {
      downGame() {
        this.typeShow = false
        this.showGameCategory = !this.showGameCategory
        this.showTaskCategory = false
        this.show = true
        this.ifshow = !this.ifshow
      },
      downTask() {
        this.ifshow = false
        this.showTaskCategory = !this.showTaskCategory
        this.showGameCategory = false
        this.typeShow = !this.typeShow
      },
      apply() {
        this.$toast.success('成功');
      }
    }
  }
</script>

<style >
  .page {
    margin: 0 auto;
    position: relative;
    width: 90%;
    padding-bottom: 3rem;
  }

  .shadow {
    display: flex;
    justify-content: space-between;
  }

  .category {

    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .category > div {
    font-size: 1.4rem;
    width: 34%;
  }

  .adv {
    position: relative;
    animation: mymove 1s infinite;
    -moz-animation: mymove 1s infinite; /* Firefox */
    -webkit-animation: mymove 1s infinite; /* Safari and Chrome */
    -o-animation: mymove 1s infinite; /* Opera */
  }

  .adv img {
    width: 100%;
    margin-top: 2rem;
    border-radius: 0.7rem;
  }

  .show-enter-active, .show-leave-active {
    transition: all 2s;
  }

  .show-enter, .show-leave-to {
    margin-left: 100px;
  }

  .show-enter-to, .show-leave {
    margin-left: 0px;
  }

  .game {
    position: relative;
    color: #AFACB4;
  }

  .date {
    position: relative;
    color: #AFACB4;
  }

  .game::after {
    position: absolute;
    top: 50%;
    left: 6.2rem;
    margin-top: -5px;
    border: 3px solid;
    border-color: transparent transparent currentColor currentColor;
    /*-webkit-transform: rotate(-45deg);*/
    transform: rotate(-45deg);
    opacity: 0.8;
    content: '';
    transition: all .3s linear;
  }

  .date::after {
    position: absolute;
    top: 50%;
    left: 3.4rem;
    margin-top: -5px;
    border: 3px solid;
    border-color: transparent transparent currentColor currentColor;
    /*-webkit-transform: rotate(-45deg);*/
    transform: rotate(-45deg);
    opacity: 0.8;
    content: '';
    transition: all .3s linear;
  }

  .kind {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .kind div {
    margin-top: 1.3rem;
    width: 31%;
    text-align: center;
    color: #AFACB4;
    height: 3.5rem;
    font-size: 1.4rem;
    line-height: 3.5rem;
    border-radius: 0.5rem;
    background-color: #403157;
  }

  .gamedown::after {
    margin-top: -1px;
    /*-webkit-transform: rotate(135deg);*/
    transform: rotate(135deg);
  }
  /*.showModel{*/
    /*position: absolute;*/
    /*animation: searchTop .4s linear;*/
  /*}*/
  @keyframes searchTop {
    from{
      top:18rem;
    }
    to{
      top: 2.1rem;
    }
  }

  .datedown::after {
    margin-top: -1px;
    /*-webkit-transform: rotate(135deg);*/
    transform: rotate(135deg);
  }

  .collapseBox{
    border-radius: 0.5rem;
    margin-top: 2rem;
    overflow: hidden;
  }
  .collapseBox img{
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .collapseBox .van-cell{
    padding: 0;
    background-color: transparent;
    line-height: 0.9;
  }
  .page .van-hairline--top-bottom::after,.page .van-hairline-unset--top-bottom::after,.page .van-hairline--top::after{
    border: none;
  }
  .collapseBox-head{
    position: relative;
  }
  .collapseBox-title{
    width: 100%;
    position: absolute;
    bottom: 0.1rem;
    margin: 0;
    color: white;
    padding: 0.8rem 0rem;
    font-size: 1rem;
    background-color: rgba(0,0,0,.5);

  }
  .collapseBox-title span{
    margin-left: 0.5rem;
  }
  .collapseBox-title span:last-of-type{
    float: right;
    margin-right: 0.5rem;
  }
  .page .van-collapse-item__content{
    background-color: #230f40;
  }
  .collapseBox-btn{
    display: block;
    margin: auto;
    margin-top: 1rem;
    height: 3rem;
    background-color: transparent;
    line-height: 3rem;
  }
</style>
