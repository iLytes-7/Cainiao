<template>
  <div class="addAccount">
    <van-cell-group class="form">
      <van-field v-model="form.username" label="账号：" placeholder="请输入账号"/>
      <van-field v-model="form.phone" label="账户名：" placeholder="请输入账户名"/>
      <van-field v-model="form.phone" label="开户省：" placeholder="请输入开户省"/>
      <van-field v-model="form.phone" label="开户市：" placeholder="请输入开户市"/>
      <van-field v-model="form.phone" label="分行名称：" placeholder="请输入分行名称"/>
      <van-field v-model="form.phone" label="手机号码：" placeholder="请输入手机号码">
        <van-button class="codeBtn" slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field v-model="form.phone" label="验证码：" placeholder="请输入验证码"/>
    </van-cell-group>
    <van-button class="btn" color="#FF6D44"  @click="submit">提交卡号</van-button>
  </div>
</template>

<script>
  export default {
    name: "addAccount",
    data() {
      return {
        form: {
          username: '',
          phone: ''
        }
      }
    },
    methods: {
      submit() {
        for(let prop in this.form){
          if(this.form[prop] === ''){
            this.$toast.fail('请填写完整');
            return
          }
        }
        this.$toast.success('成功');
      }
    }
  }
</script>

<style>
  .addAccount{
    margin-top: 2rem;
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
  .form .van-cell .van-field__control{
    font-size: 1.3rem;
  }
  .form .codeBtn{
    color: #FF6D44;
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
  }
</style>
