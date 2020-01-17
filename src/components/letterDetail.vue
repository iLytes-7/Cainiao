<template>
  <div class="letterDetail">
    <div class="letterTitle">
      主题：{{$route.query.letterTitle}}
    </div>
    <div class="letterContent">
      <p v-html = 'messageData.message'>
      </p>
    </div>
    <loading :show="loading"></loading>
  </div>

</template>

<script>
  import {message} from '@/api/message'
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
      console.log(res.result.messages);
      this.messageData = res.result[0]
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
      text-align: center;
      padding: 1rem;
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
