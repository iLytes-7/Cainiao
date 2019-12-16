<template>
  <div class="page">
    <div class="cuxiao">
      <van-tabs type="card" animated color="#403158" background="#291744" title-active-color="white"
                title-inactive-color="white">
        <van-tab title="优惠">
          <van-collapse v-model="activeNames" class="collapse" accordion>
            <van-collapse-item :name="item" :is-link="false" class="collapseBox" v-for="item in 3" :key="item">
              <div slot="title" class="collapseBox-head">
                <img src="../assets/adv2.png">
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
        </van-tab>
        <van-tab title="任务">
          <div style="margin-top: 2rem">
            <div class="task-box">
              <div style="width: 70%">
                <div style="color: white;font-size: 1.8rem;font-weight: 500;line-height: 3rem">注册有礼</div>
                <div style="font-size: 1.1em;line-height: 2rem;color: #AFACB4">注册时间：2019年12月16日起</div>
              </div>
              <div class="have-accpte">
                已领取
              </div>
            </div>
            <div class="task-box">
              <div style="width: 70%">
                <div style="color: white;font-size: 1.9rem;font-weight: 500;line-height: 3rem">注册有礼</div>
                <div style="font-size: 1.1em;line-height: 2rem;color: #AFACB4">注册时间：2019年12月16日起</div>
              </div>
              <div class="havnot-accpte">
                未领取
              </div>
            </div>
          </div>

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeNames: ['0']
            }
        },
        methods: {
            apply() {
                this.$toast.success('成功');
            },
            onConfirm() {
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

<style>
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

  .have-accpte {
    font-size: 1.2rem;
    border: 1px solid #413651;
    background-color: #230f40;
    padding: 0.2rem 1.2rem;
    color: #827d8d;
    border-radius: 0.3rem;
  }
  .havnot-accpte {
    font-size: 1.2rem;
    border: 1px solid #ff6d44;
    background-color: #230f40;
    padding: 0.2rem 1.2rem;
    color: #ff6d44;
    border-radius: 0.3rem;
  }

  .task-box {
    padding: 1.2rem;
    width: 100%;
    height: 8.5rem;
    background-color: #291744;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 0.7rem;
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
    from {
      top: 18rem;
    }
    to {
      top: 2.1rem;
    }
  }

  .datedown::after {
    margin-top: -1px;
    /*-webkit-transform: rotate(135deg);*/
    transform: rotate(135deg);
  }

  .collapseBox {
    border-radius: 0.5rem;
    margin-top: 2rem;
    overflow: hidden;
  }

  .collapseBox img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .collapseBox .van-cell {
    padding: 0;
    background-color: transparent;
    line-height: 0.9;
  }

  .page .van-hairline--top-bottom::after, .page .van-hairline-unset--top-bottom::after, .page .van-hairline--top::after {
    border: none;
  }

  .collapseBox-head {
    position: relative;
  }

  .collapseBox-title {
    width: 100%;
    position: absolute;
    bottom: 0.1rem;
    margin: 0;
    color: white;
    padding: 0.8rem 0rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .5);

  }

  .collapseBox-title span {
    margin-left: 0.5rem;
  }

  .collapseBox-title span:last-of-type {
    float: right;
    margin-right: 0.5rem;
  }

  .page .van-collapse-item__content {
    background-color: #230f40;
  }

  .page .collapseBox-btn {
    display: block;
    margin: auto;
    margin-top: 1rem;
    height: 3rem;
    background-color: transparent;
    line-height: 3rem;
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

  .cuxiao .van-dropdown-menu__item {
    width: 23%;
  }
</style>
