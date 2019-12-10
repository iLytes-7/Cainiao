<template>
  <div class="page">
    <div style="margin-top: 1rem">
      <van-field v-model="title" placeholder="主题"
                 style="padding: 0.7rem 1rem;background-color: #291744;border-radius: 0.4rem;color: #AFACB4"/>
    </div>
    <div style="margin-top: 2rem">
      <van-field
        v-model="message"
        rows="6"
        type="textarea"
        placeholder="你的信息"
        show-word-limit
        style="background-color: #291744;border-radius: 0.4rem;padding: 0.7rem 1rem;color: #AFACB4"
      />
    </div>
    <div class="btn-group">
      <div >
        发送
      </div>
      <div style="background-color: #230F40;border: solid 1px #FF6D44">
        取消
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'',
        message:'',
    }
  }
}
</script>

<style scoped>
.page{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
  .btn-group{
    margin-top: 3.8rem;
    width: 100%;
  }
  .btn-group div{
    border-radius: 0.4rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    text-align: center;
    background-color: #FF6D44;
    width: 100%;
    height: 3.8rem;
    line-height: 3.8rem;
  }
</style>
