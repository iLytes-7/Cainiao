<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto">
    <div>
      <p style="color: #7E7B83;font-size: 1.1rem;text-indent: 2.2rem">为了您的资金安全，请上传与您身份证一致的信息，否则不会 通过</p>
    </div>
    <div style="width: 80%;margin-right: auto;margin-left: auto">
      <van-uploader :after-read="afterRead" v-model="fileList" max-count="1" upload-text="添加照片"  />
    </div>
    <div style="text-align: center">
      <van-button type="primary" size="large" color="#FF6D44"
                  style="margin-top: 4rem;border-radius: 6px;width: 80%">提交验证
      </van-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            }
        }
    }
</script>

<style >
  .van-uploader{
    margin-top: 2rem;
    width: 100%;
  }
  .van-uploader__upload{
    width: 100%;
    height: 15rem;
    background-color: #230F40;
    border-width: 2px;
    border-color: #374C8C;
  }
  .van-uploader__preview-image{
    width: 100%;
    height: 16rem;
    margin-bottom: 1rem;
  }
  .van-uploader__upload-icon{
    color: #547BF2;
    font-size:4.4rem
  }
  .van-uploader__upload-text{
    margin-top: 1rem;
    font-size: 1.3rem;
    color: #547BF2;
  }

</style>
