<template>
  <div class="bankDetail">
    <van-cell-group class="form">
      <div class="imgBox">
        <img src="../../assets/image/logo.png" alt="">
      </div>
      <p>{{form.bankName}}</p>
      <van-field v-model="form.bankAccountNumber" label="账号："/>
      <van-field v-model="form.bankAccountFullName" label="账户名："/>
      <van-field v-model="form.province" label="开户省："/>
      <van-field v-model="form.city" label="开户市："/>
      <van-field v-model="form.branch" label="分行名称："/>
      <van-field v-model="form.phone" label="手机号码："></van-field>
      <van-field v-model="form.bankAddress" label="分行地址："/>
    </van-cell-group>
    <van-button class="btn" color="#FF6D44" @click='del'>删除账户</van-button>
  </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        form: {
          bankAccountFullName: '',
          bankName: '',
          city: '',
          province: '',
          branch: '',
          bankAddress: '',
          phone: ''
        }
      }
    },
    mounted() {
      console.log(JSON.parse(this.$route.query.backInfo));
      this.form = JSON.parse(this.$route.query.backInfo)
    },
    methods: {
      del() {
        this.$toast.success('删除成功');
      }
    }
  }
</script>

<style scoped>
  .bankDetail{
    margin-top: 2rem;
  }
  .imgBox {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: #CAE7FA !important;
    position: relative;
    margin-left: 16px;
  }
  .form p{
    margin-left: 16px;
    color: #FFFFFF;
    font-size: 1.3rem;
  }

  .imgBox img {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form{
    background-color: #291744;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .form::after{
    border: none;
  }
  .form>div{
    background-color: transparent;
  }
  .form .van-cell{
    color: #AFACB4;
    font-size: 1.3rem;
    border-bottom: 1px solid #352251;
  }
  .form .van-cell:last-of-type{
    border: none;
  }
  .form  input{
    font-size: 1.3rem;
  }
  .form .codeBtn{
    color: #FF6D44;
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
  }
</style>
