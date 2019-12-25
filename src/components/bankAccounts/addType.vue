<template>
    <div class="accounts">
      <van-button class="btn" @click="add('deposit')">查看存款银行卡</van-button>
      <van-button class="btn" @click="add('withdraw')">查看取款银行卡</van-button>
    </div>
</template>

<script>
export default {
  name: "addType",
  methods: {
      add(item) {
        if(item === 'deposit') {
          this.$router.push({path:'/bankAccount/bankAccount'})
        }else {
          this.$router.push({path:'/bankAccount/withdrawAccount'})
        }
      }
  }
}
</script>

<style scoped>
  .accounts .van-button {
    color: #FF6D44;
    background-color: transparent;
    border-color: #FF6D44;
    border-radius: 0.5rem;
  }
</style>
