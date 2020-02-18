<template>
  <div class="invitied">
    <div style="position: relative; margin-top: 5rem">
      <img src="../assets/image/yqm.png" alt="">
      <div class="invitied-num">
        <div style="color: #8C74B1;font-size: 1.4rem;line-height: 1.5rem">您的邀请码</div>
        <div style="color: #E6E2ED;font-size: 3rem;font-weight: 600;letter-spacing: 0.1rem;line-height: 4rem">
          {{invitiedNum}}
        </div>
        <div><a v-clipboard:copy="invitiedNum"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError" href="javascript:void(0); ">复制邀请码</a></div>
      </div>
      <div class="invitied-url">
        <div style="color: #8C74B1;font-size: 1.4rem;line-height: 1.5rem; margin-bottom: 0.5rem">您的专属链接</div>
        <div style="color: #E6E2ED;font-size: 1.3rem;line-height: 1.5;">{{invitiedUrl}}</div>
        <div><a v-clipboard:copy="invitiedUrl"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError" href="javascript:void(0);">复制链接</a></div>
      </div>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  import {mapGetters} from 'vuex'
  import {getPlayerProfile} from '@/api/user';

  export default {
    data() {
      return {
        invitiedNum: '',
        invitiedUrl: '',
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'token'
      ])
    },
    mounted() {
      this.getPlayerProfile()
    },
    methods: {
      // 复制成功
      onCopy(e) {
        console.log(e);
        Toast('复制成功');
      },
      // 复制失败
      onError(e) {
        alert("失败");
        Toast('复制失败');
      },
      getPlayerProfile() {
        let data = {
          api_key: 'ea443b05c7067089bd2716f47257ee73',
          username: this.name,
          token: this.token
        }
        this.loading = true
        getPlayerProfile(data).then(res => {
          this.invitiedNum = res.result.referral_code
          this.invitiedUrl = 'http://player.bird10.com/player_center/iframe_register?referralcode=' +
              this.invitiedNum
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .invitied {
    width: 90%;
    margin: 0 auto;
  }

  .invitied-num {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    top: 14%;
  }

  .invitied-url {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    top: 65%;
    word-wrap:break-word;
    max-width: 80%
  }

  .invitied img {
    width: 100%;
  }

  a {
    color: #FF6D44;
    font-size: 1.3rem;
  }
</style>
