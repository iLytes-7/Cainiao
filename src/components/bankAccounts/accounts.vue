<template>
  <div class="accounts">
    <div class="bank" v-for="(item,index) in banks" :key="index" @click="go(item)">
      <div class="imgBox">
        <img src="../../assets/image/jtyh.png" alt="">
      </div>
      <div class="info">
        <p class="bankName">{{item.bankName}}</p>
        <p class="username">{{item.bankAccountFullName}}</p>
        <p class="accountNum">
          {{item.bankAccountNumber | account}}
        </p>
      </div>
    </div>
    <van-button class="btn" icon="plus" @click="add">添加资金账户</van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {getBank} from "@/api/bank";
  import {mapGetters} from 'vuex'
  export default {
    name: "accounts",
    data() {
      return {
        loading: false,
        banks: []
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    mounted() {
      this.getBank()
    },
    methods: {
      add() {
        this.$router.push({path:'/bankAccount/addAccount'})
      },
      go(item) {
        this.$router.push({path:'/bankAccount/detail',query: {backInfo: JSON.stringify(item)}})
      },
      getBank() {
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token
        }
        this.loading = true
        getBank(data).then(res => {
          this.banks = res.result
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .bank {
    border-radius: 0.5rem;
    padding: 2rem;
    border: 1px solid white;
    margin-top: 2rem;
  }

  .imgBox {
    float: left;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    background-color: #CAE7FA;
    position: relative;
  }

  .imgBox img {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .info {
    margin-left: 5rem;
  }

  .info p {
    margin: 0px;
  }

  .info .bankName {
    font-size: 1.8rem;
  }

  .info .username {
    padding: 0.5rem 0rem;
  }

  .info .accountNum {
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  .info .accountNum span {
    margin-right: 1rem;
    font-size: 1.6rem;
  }

  .accounts .van-button {
    color: #FF6D44;
    background-color: transparent;
    border-color: #FF6D44;
    border-radius: 0.5rem;
  }
</style>
