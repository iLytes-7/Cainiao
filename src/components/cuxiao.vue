<template>
  <div class="page">
    <div class="menu">
      <div class="category">
        <div class="game" v-bind:class="{ active: showGameCategory,'gamedown':showGameCategory }"
             @click="downGame">游戏分类
        </div>
        <div class="date" v-bind:class="{ active: showTaskCategory,'datedown':showTaskCategory }"
             @click="downTask">任务
        </div>
      </div>
      <transition name="van-fade">
        <div v-show="ifshow" class="showModel">
          <div style="margin-top: 1.4rem;font-size: 1.6rem;color: #AFACB4">快捷筛选</div>
          <div class="kind">
            <div>
              电子竞技
            </div>
            <div>
              老虎机
            </div>
            <div>
              VIP优惠
            </div>
            <div>
              体育
            </div>
            <div>
              真人
            </div>
            <div>
              彩票
            </div>
            <div style="width: 50%">全部游戏</div>
          </div>
        </div>
      </transition>

      <div class="adv">
        <img src="../assets/adv1.jpeg">
        <div class="shadow">
          <div>2019年10月现金回馈</div>
          <div>有效期：2019-12-31</div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
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
                ifshow: true
            }
        },
        methods: {
            downGame() {
                this.showGameCategory = !this.showGameCategory
                this.showTaskCategory = false
                this.show = true
                this.ifshow = !this.ifshow
            },
            downTask() {
                this.showTaskCategory = !this.showTaskCategory
                this.showGameCategory = false

            },

        }
    }
</script>

<style scoped>
  .page {
    width: 98%;
    margin: 0 auto;
  }
  .shadow{
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

  .datedown::after {
    margin-top: -1px;
    /*-webkit-transform: rotate(135deg);*/
    transform: rotate(135deg);
  }

  .active {
    color: #FF6D44;
  }


</style>
