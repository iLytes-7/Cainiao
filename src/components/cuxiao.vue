<template>
  <div class="page">
    <div class="cuxiao">
      <div class="btnGroup">
        <van-button @click="filter(index, item.id)" :class="{literBtn:index === curr}" v-for="(item,index) in categories"
                    key="item.id" type="default">{{item.name}}
        </van-button>
      </div>
      <van-collapse accordion class="collapse" v-model="activeNames" v-if="show">
        <van-collapse-item :is-link="false" :key="item.id" :name="item.name" class="collapseBox"
                           v-for="(item,index) in promoData">
          <div class="collapseBox-head" slot="title">
            <img :src="'http://player.dj002.t1t.in/'+item.promo_image">
            <p class="collapseBox-title">
              <span>{{item.promoName}}</span>
              <span></span>
            </p>
          </div>
          <div slot="default">
            <span v-html="item.promoDetails"></span>
            <van-button @click="apply(item)" class='collapseBox-btn' color="#6149f6" plain round>立即申请</van-button>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {getListPromos,applyPromo} from '@/api/cuxiao'
  import {mapGetters} from 'vuex'

  export default {
    inject: ['reload'],
    data() {
      return {
        activeNames: [0],
        categories: [],
        promos: [],
        loading: false,
        promoData: [],
        curr: 0,
        show:true
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    mounted() {
      this.getListPromos()
    },
    methods: {
      apply(item) {
        if(!item.promo_check_player_allowed){
          this.$toast.fail(item.promo_check_mesg);
          return
        }
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          promo_cms_id: item.promo_cms_id
        }
        this.loading = true
        applyPromo(data).then(res => {
          this.$toast.success('申请成功')
          this.reload()
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      },
      onConfirm() {
        this.$refs.type.toggle();
      },
      time() {
        this.$refs.time.toggle();
      },
      log() {
        this.$refs.log.toggle();
      },
      getListPromos() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          is_deposit: 0
        }
        this.loading = true
        getListPromos(data).then(res => {
          console.log(res);
          this.categories = res.result.categories
          this.promos = res.result.promos
          const id = this.categories[0].id
          this.promos.forEach(item => {
            if (item.promo_category == id) {
              this.promoData.push(item)
            }
          })
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      },
      filter(curr,id) {
        this.activeNames = []
        this.show = false
        this.$nextTick(()=>{
          this.curr = curr
          this.promoData = []
          this.promos.forEach(item => {
            if (item.promo_category == id) {
              this.promoData.push(item)
            }
          })
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss">
  .page {
    margin: 0 auto;
    position: relative;
    width: 90%;
    padding-bottom: 3rem;
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
    width: 100%;
    margin: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, 28vw);
  }

  .btnGroup button {
    margin-bottom: 1rem;
    background-color: #403157;
    color: #AFACB4;
    border: none;
    border-radius: 0.5rem;
    white-space: nowrap;
  }

  .literBtn {
    border-color: rgb(255, 109, 68) !important;
    color: rgb(255, 109, 68) !important;
  }

  .btnGroup button {
    border: solid 1px #403157;
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
