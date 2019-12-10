<template>
  <div class="verification" style="width: 90%;margin-left: auto;margin-right: auto">
    <div class="content">
      <div style="height: 0.5rem;width: 110vw;background-color: #291744;margin-left: -2rem">
      </div>
      <div class="info-row">
        <div class="info-item">个人头像</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have"></div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row" @click="prop">
        <div class="info-item">昵称</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">Mike</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">真实姓名</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">周董</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">性别</div>
        <div style="display: flex;align-items: center">
          <van-radio-group v-model="sex" shape="square" icon-size="1.3rem" checked-color="#FF6D44">
            <van-radio name="1" checked>男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">生日</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">1990.8.28</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">国籍</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">中国</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">出生地</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">湖南长沙</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="height: 0.5rem;width: 110vw;background-color: #291744;margin-left: -2rem">
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <router-link to="/safety-setting/test-phone">
          <div class="info-item">电话号码</div>
          <div style="display: flex;align-items: center">
            <div class="info-status have">188888888</div>
            <van-icon name="arrow"/>
          </div>
        </router-link>
      </div>
      <div class="info-row">
        <div class="info-item">微信</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">18888888888</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">QQ</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">787876576</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <van-popup v-model="visible" round closeable @close="handleClose" style="width: 70%;height: 60%">
      <div style="margin-top: 3rem;text-align: center;color: black">
        <div style="font-size: 1.5rem">更换头像</div>
        <van-uploader preview-size="10rem" v-model="filegroup"  :after-read="afterRead" :max-count="1" :preview-full-image="false"
                      :deletable="true" style="margin-top: 1.5rem" >
          <div  slot="default" style="width: 100%;height: 100%">
            <img :src="fileList[0].url" alt="" style="width: 12rem;height: 12rem;border-radius: 7rem">
          </div>
        </van-uploader>
      </div>
    </van-popup>

  </div>

</template>

<script>
    export default {
        data() {
            return {
                sex: '1',
                visible: true,
                filegroup:[],
                fileList: [
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
                ]
            }
        },
        methods: {
            logout() {
            },
            prop() {
                this.visible = true
            },
            afterRead(file) {
                console.log(file)
                this.fileList[0].url = file.content
                this.filegroup = []
            },
            handleClose(){
                this.filegroup = []
            }

        }
    }
</script>

<style scoped>
  .verification a {
    width: 100%;
    color: white !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    line-height: 3rem;
    border-bottom: solid 1px #291744;
  }

  .logout {
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: #AFACB4;
  }

  .content {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    line-height: 3rem;
    border-bottom: solid 1px #291744;
  }

  .info-item {
    font-size: 1.4rem;
    margin-left: 1rem;
    color: #AFACB4;
  }

  .info-status {
    font-size: 1.1rem;
    margin-right: 1rem;
  }

  .have {
    color: #AFACB4;

  }


  .info-row img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.7rem;
  }

  .van-radio-group {
    display: flex;
    color: white;
  }

  .van-radio {
    padding: 0 1.5rem;
  }
</style>
