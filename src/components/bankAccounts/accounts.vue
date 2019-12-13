<template>
  <div class="accounts">
    <div class="bank" v-for="(item,index) in banks" :key="index" @click="go(item)">
      <div class="imgBox">
        <img src="../../assets/jtyh.png" alt="">
      </div>
      <div class="info">
        <p class="bankName">{{item.bankName}}</p>
        <p class="username">{{item.userName}}</p>
        <p class="accountNum">
          <!--<span>****</span>-->
          <!--<span>****</span>-->
          <!--<span>****</span>-->
          <!--<span>8521</span>-->
          {{item.account | account}}
        </p>
      </div>
    </div>
    <van-button class="btn" icon="plus" @click="add">添加资金账户</van-button>
  </div>
</template>

<script>
  export default {
    name: "accounts",
    data() {
      return {
        banks: [
          {
            bankName: '交通银行',
            userName: '李二狗',
            account: '6288569536541257'
          },
          {
            bankName: '交通银行',
            userName: '李二狗',
            account: '6288569536541257'
          },
          {
            bankName: '交通银行',
            userName: '李二狗',
            account: '6288569536541257'
          }
        ]
      }
    },
    methods: {
      add() {
        this.$router.push({path:'/bankAccount/addAccount'})
      },
      go(item) {
        this.$router.push({path:'/bankAccount/detail',query: {id: item}})
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
