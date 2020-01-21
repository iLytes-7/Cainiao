<template>
  <div class="letterDetail">
    <div class="letterTitle">
      <p style="font-size: 1.1rem">主题 : {{$route.query.letterTitle}}</p>
      <p style="font-size: 1.1rem">时间 : {{messageData.date}}</p>
    </div>
    <div class="letterContent">
      <p v-html = 'messageData.message'>
      </p>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {message,messageSetRead} from '@/api/message'
  import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      loading: false,
      messageData: []
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'token'
    ])
  },
  mounted() {
    let data = {
      api_key: "ea443b05c7067089bd2716f47257ee73",
      username: this.name,
      token: this.token,
      messageId: this.$route.query.letterId
    }
    this.loading = true
    message(data).then(res => {
      this.messageData = res.result[0]
      messageSetRead(data).then(res => {
      })
      this.loading = false
    }).catch(() => {
      this.loading = false
    })
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

  .letterDetail{
      color: #afacb4;
      font-size: 1.2rem;
    .letterTitle{
      font-size: 1.3rem;
      line-height: 1rem;
      text-align: left;
      padding: 0.1rem 1rem;
      background-color: #291744;
      border-bottom: 1px solid #3d275e;
    }
    .letterContent{
      width: 86%;
      margin: auto;
      word-break: break-word;
    }

  }

</style>
