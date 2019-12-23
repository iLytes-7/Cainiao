<template>
  <div class="page">
    <div style="margin-top: 1rem">
      <van-field v-model="title" placeholder="主题"
                 style="padding: 0.7rem 1rem;background-color: #291744;border-radius: 0.4rem;color: #AFACB4"/>
    </div>
    <div style="margin-top: 2rem">
      <van-field v-model="message" rows="6" type="textarea" placeholder="你的信息" show-word-limit
                 style="background-color: #291744;border-radius: 0.4rem;padding: 0.7rem 1rem;color: #AFACB4"/>
    </div>
    <div class="btn-group">
      <div @click="save">发送</div>
      <div style="background-color: #230F40;border: solid 1px #FF6D44">取消</div>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {addMessage} from "../api/message";
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        title: '',
        message: '',
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    methods: {
      save() {
        if (this.title == '') {
          this.$notify('标题不能为空')
        }
        let data = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: this.name,
          token: this.token,
          subject: this.title,
          message: this.message
        }
        this.loading = true
        addMessage(data).then(res => {
          this.$toast('保存成功')
          this.$router.push({path: '/letter'})
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .page {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-group {
    margin-top: 3.8rem;
    width: 100%;
  }

  .btn-group div {
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
