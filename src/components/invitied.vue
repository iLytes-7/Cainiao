<template>
  <div class="invitied">
    <div style="position: relative; margin-top: 4.5rem">
      <img src="../assets/invitied.png" alt="">
      <div class="invitied-num">
        <div style="color: #8C74B1;font-size: 1.4rem;line-height: 1.5rem">您的邀请码</div>
        <div style="color: #E6E2ED;font-size: 3rem;font-weight: 600;letter-spacing: 0.5rem;line-height: 4rem">{{invitiedNum}}
        </div>
        <div><a v-clipboard:copy="invitiedNum"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"  href="javascript:void(0); ">复制邀请码</a></div>
      </div>
      <div class="invitied-url">
        <div style="color: #E6E2ED;font-size: 1.5rem;line-height: 3rem">{{invitiedUrl}}</div>
        <div><a v-clipboard:copy="invitiedUrl"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError" href="javascript:void(0);">复制口令</a></div>
      </div>
    </div>



  </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                invitiedNum:'58694',
                invitiedUrl:'http://www.fhi365.cn/index.html'
            }
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
        }
    }
</script>

<style scoped>
  .invitied {
    width: 90%;
    margin: 0 auto;
  }
  .invitied-num{
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    top: 14%;
  }
  .invitied-url{
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    top: 65%;
  }

  .invitied img {
    width: 100%;
  }
  a{
    color: #FF6D44;
    font-size: 1.3rem;
  }
</style>
