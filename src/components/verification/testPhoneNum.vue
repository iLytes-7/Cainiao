<template>
  <div style="width: 90%;margin-left: auto;margin-right: auto">
    <div class="phone">手机号码</div>
    <div class="phone-input">
      <div style="width: 63%">
        <van-field v-model="phoneNum" placeholder="请输入手机号码" type="number"
                   style="padding: 1rem 1rem;height: 100%;background-color: #291744;border-radius: 0.3rem 0rem
                   0rem 0.3rem;" />
      </div>
      <div style="width: 37%">
        <van-button type="info"
                    @click="getCode"
                    :disabled="codeBtnShow"
                    style="height: 100%;width: 100%;background-color: #476AD4;color: #E1E5F2;
                    border: none;
                    ;border-radius: 0rem 0.3rem 0.3rem 0rem;
"> <span v-if="time === 0">获取验证码</span><van-count-down @finish="time = 0" v-else :time="time"  format=" ss 秒" />
        </van-button>
      </div>
    </div>
    <div class="phone">验证码</div>
    <div class="phone-input">
      <div style="width: 100%">
        <van-field v-model="code" placeholder="请输入验证码" type="number"
                   style="padding: 1rem 1rem;height: 100%;background-color: #291744;border-radius:0.3rem" />
      </div>
    </div>
    <div style="text-align: center">
      <van-button type="primary" size="large" color="#FF6D44" :disabled="show"
                  style="margin-top: 4rem;border-radius: 5px;width: 100%; ">提交验证
      </van-button>
    </div>
  </div>
</template>

<script>

    import {smsVerifySend} from '@/api/user';
    export default {
        data() {
            return {
                phoneNum: '',
                code:'',
                time:0
            }
        },
        computed: {
            show() {
                let show;
                if (this.phoneNum !== '' && this.code !== '') {
                    show = false
                } else {
                    show = true
                }
                return show
            },
            codeBtnShow(){
                let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                let codeBtnShow;
                if (this.phoneNum !== '' && phone.test(this.phoneNum)) {
                    codeBtnShow = false
                } else {
                    codeBtnShow = true
                }
                return codeBtnShow
            }
        },
        methods:{
            getCode(){
                let data = {
                    api_key:'ea443b05c7067089bd2716f47257ee73',
                    contactNumber: this.tel
                }
                this.loading = true
                smsVerifySend(data).then(response => {
                    console.log(response);
                    this.tuid = response.result.tuid
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },

        }
    }
</script>

<style scoped>
  .phone {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #7E7B83;
  }

  .van-cell-group {
    margin-top: 1rem;
    height: 3.6rem;
  }

  .van-field__control {
    line-height: 3.6rem;
  }

  .van-cell {
    padding: 0 1.6rem;
  }

  .phone-input {
    margin-top: 1rem;
    display: flex;
    height: 3.8rem;
    justify-content: space-between;
  }
</style>
