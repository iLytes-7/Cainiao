<template>
  <div>
    <div class="head">
      <div>主题</div>
      <div>信息</div>
      <div>时间</div>
    </div>
    <div style="height: 0.3rem;width: 100%"></div>
    <div class="messageBox">
      <div class="content" v-for="(item,index) in messageData" :key="index" @click="goDetail(item)">
        <div style="position:relative;"><p style="width: 90%; font-size: 1.1rem;text-align: center;font-weight: 600;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">{{item.subject}}</p><span class="redDot" v-if="item.status==6"></span></div>
        <div><p
          style="width: 80%; font-size: 1.1rem;color: #AFACB4;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;"
          class="van-multi-ellipsis--l3" v-html="item.detail.substr(0,10)"></p></div>
        <div><p style="width: 90%; font-size: 1.1rem;text-align: center;color: #AFACB4">{{item.date}}</p></div>
      </div>
      <p v-if="messageData.length === 0" style="text-align: center">
        暂无数据
      </p>
    </div>
    <div style="margin-top: 4rem; margin-bottom: 4rem">
        <div class="btn-edit" @click="goEdit">
          <img src="../assets/image/editicon.png">
        </div>
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
                token: this.token
            }
            this.loading = true
            message(data).then(res => {
                console.log(res.result.messages);
                this.messageData = res.result.messages
                this.loading = false
            })
        },
        methods:{
            goEdit() {
                this.$router.push({path: "/editletter"})
            },
          goDetail(item){
                this.$router.push({path: "/letterDetail" , query:{letterId:item.messageId,letterTitle:item.subject}})
          }
        }
    }
</script>

<style scoped>
  .head {
    text-align: center;
    margint-top: 2rem;
    width: 100%;
    display: flex;
    background-color: #291744;
    justify-content: space-between;
    margin-top: 0.6rem;
    line-height: 2.7rem;
    color: #7E7B83;
  }

  .btn-edit {
    position: relative;
    background-color: #FF6D44;
    margin: auto;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
  }

  .btn-edit > img {
    position: absolute;
    width: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .redDot{
    position: absolute;
    top:0.8rem;
    right: 1rem;
    width: 0.6rem;
    height: 0.6rem;
    display: inline-block;
    border-radius: 100%;
    background-color: red;

  }

  .head > div {
    width: 33%;
  }

  .content {
    align-items: center;
    padding: 0.9rem 0;
    width: 100%;
    display: flex;
    background-color: #291744;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .content > div {
    width: 33%;
  }

  .content p {
    margin-right: auto;
    margin-left: auto;

  }
</style>
