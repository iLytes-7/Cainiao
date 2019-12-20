<template>
  <div class="verification" style="margin-left: auto;margin-right: auto">
    <div class="content">
      <div style="height: 0.5rem;width: 100%;background-color: #291744">
      </div>
      <div style="margin-left: 1rem;font-size: 1.6rem;margin-top: 1rem; margin-bottom: 0.3rem">
        关键信息:
      </div>
      <div class="info-row"
           v-clipboard:copy="nickName"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError">
        <div class="info-item" required>账号</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">{{nickName}}</div>
        </div>
      </div>
      <div class="info-row" @click="propNickName">
        <div class="info-item">真实姓名</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">{{realName}}</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <router-link to="/safety-setting/test-phone">
          <div class="info-item">电话号码</div>
          <div style="display: flex;align-items: center">
            <div class="info-status have">{{tel}}</div>
            <van-icon name="arrow"/>
          </div>
        </router-link>
      </div>
    </div>
    <div style="height: 0.5rem;width: 100%;background-color: #291744">
    </div>
    <div class="content">
      <div style="margin-left: 1rem;font-size: 1.6rem;margin-top: 1rem; margin-bottom: 0.3rem">
        其他信息:
      </div>
<!--      <div class="info-row" @click="propHead">-->
<!--        <div class="info-item">个人头像</div>-->
<!--        <div style="display: flex;align-items: center">-->
<!--          <div class="info-status have"></div>-->
<!--          <van-icon name="arrow"/>-->
<!--        </div>-->
<!--      </div>-->
      <div class="info-row">
        <div class="info-item">性别</div>
        <div style="display: flex;align-items: center">
          <van-radio-group v-model="sex" shape="square"  icon-size="1.3rem" checked-color="#FF6D44">
            <van-radio name="1" checked>男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">生日</div>
        <div style="display: flex;align-items: center">
          <van-field
            v-model="userListForm.end_time"
            readonly="readonly"
            @click="endTimePop = true"
          />
          <van-popup v-model="endTimePop"  label="离开时间" position="bottom" :overlay="true">
            <van-datetime-picker
              v-model="currentDate_end"
              type="date"
              :min-date="minDate"
              @cancel="endTimePop = false"
              @confirm="endTimeChange"

            />
          </van-popup>

          <van-icon name="arrow"/>
        </div>
      </div>
<!--      <div class="info-row">-->
<!--        <div class="info-item">国籍</div>-->
<!--        <div style="display: flex;align-items: center">-->
<!--          <div class="info-status have">{{}}</div>-->
<!--          <van-icon name="arrow"/>-->
<!--        </div>-->
<!--      </div>-->
      <div class="info-row">
        <div class="info-item">城市</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">{{city}}</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div class="content" style="margin-top: 0rem;">
      <div class="info-row">
        <div class="info-item">微信</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">{{wechat}}</div>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">QQ</div>
        <div style="display: flex;align-items: center">
          <div class="info-status have">{{qq}}</div>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
<!--    <van-popup v-model="headVisible" round closeable @close="handleCloseHead" style="width: 70%;height: 60%">-->
<!--      <div style="margin-top: 3rem;text-align: center;color: black">-->
<!--        <div style="font-size: 1.5rem">更换头像</div>-->
<!--        <van-uploader preview-size="10rem" v-model="filegroup" :after-read="afterRead" :max-count="1"-->
<!--                      :preview-full-image="false"-->
<!--                      :deletable="true" style="margin-top: 1.5rem">-->
<!--          <div slot="default" style="width: 100%;height: 100%">-->
<!--            <img :src="fileList[0].url" alt="" style="width: 12rem;height: 12rem;border-radius: 7rem">-->
<!--          </div>-->
<!--        </van-uploader>-->
<!--      </div>-->
<!--    </van-popup>-->
    <van-popup v-model="nameVisible" round closeable @close="handleCloseNickName"
               style="width: 80%;height: 40%;text-align: center">
      <div style="position: absolute; top: 10%;transform: translateY(-50%);
        left: 50%;transform: translateX(-50%);
        width: 90%;color: black;font-size: 1.4rem">
        修改昵称
      </div>
      <div style="text-align: center;color: black;position: relative; height: 100%;width: 100%">
        <div style="position: absolute; top: 30%;transform: translateY(-50%);
        left: 50%;transform: translateX(-50%);
        width: 90%">
          <van-field v-model="copyNickName" placeholder="请输入昵称"
                     style="background-color: #eeeeee;width: 100%;color: black; border-radius: 6px "/>
          <div class="btn-confirm">
            <div style="background-color: #00befe" @click="confirmNickName">
              确认
            </div>
            <div style="background-color: #AFACB4" @click="cancelNickName">
              取消
            </div>
          </div>
        </div>
      </div>
    </van-popup>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import {Toast} from 'vant';
    import { mapGetters } from 'vuex'
    import { getPlayerProfile } from '@/api/user';

    export default {
        data() {
            return {
                sex: '1',
                minDate: new Date(1920, 1, 1),
                maxDate: '',
                headVisible: false,
                tel:'',
                nameVisible: false,
                filegroup: [],
                realName:'',
                city:'',
                nickName: '',
                qq:'',
                wechat:'',
                endTimePop: false,
                loading:false,
                copyNickName: '',
                currentDate_end: '',
                userListForm: {
                    end_time: '',
                },
                currentDate: new Date(),
                fileList: [
                    {url: 'https://img.yzcdn.cn/vant/leaf.jpg'}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        created() {
            this.copyNickName = this.nickName
            let y = new Date().getFullYear();
            this.maxDate = new Date(y, 11)
            let data = {
                api_key:'ea443b05c7067089bd2716f47257ee73',
                username:this.name,
                token:this.token
            }
            this.loading = true
            getPlayerProfile(data).then(res=>{
                console.log(res);
                let userinfo = res.result
                this.nickName = userinfo.username
                this.realName = userinfo.firstName + ' ' + userinfo.lastName
                this.tel = userinfo.contactNumber
                this.sex = userinfo.gender == '男' ? '1':'2'
                this.userListForm.end_time = userinfo.birthdate
                this.city = userinfo.city
                this.wechat = userinfo.imAccount
                this.qq = userinfo.imAccount2
                this.loading = false
            })
        },
        methods: {
            logout() {
            },
            propHead() {
                this.headVisible = true
            },
            propNickName() {
                this.nameVisible = true
            },
            afterRead(file) {
                console.log(file)
                this.fileList[0].url = file.content
                this.filegroup = []
            },
            handleCloseHead() {
                this.filegroup = []
            },
            handleCloseNickName() {
                this.copyNickName = this.nickName
                this.nameVisible = false
            },
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
            confirmNickName() {

                if (this.copyNickName === '') {
                    Toast.fail('昵称不能为空！');
                } else {
                    this.nickName = this.copyNickName
                    this.nameVisible = false
                }

            },
            cancelNickName() {
                this.copyNickName = this.nickName
                this.nameVisible = false
            },
            endTimeChange(value) {
                var date = value;
                var m = date.getMonth() + 1;
                var d = date.getDate();
                if (m >= 1 && m <= 9) {
                    m = "0" + m;
                }
                if (d >= 0 && d <= 9) {
                    d = "0" + d;
                }
                const timer = date.getFullYear() + "-" + m + "-" +d
                this.userListForm.end_time = timer
                this.endTimePop = false
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

  .van-cell {
    background-color: #230F40;
    height: 3.4rem;
  }

  .logout {
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: #AFACB4;
  }

  .btn-confirm {
    display: flex;
    margin-top: 3rem;
    justify-content: space-around;
  }

  .van-field__control {
    color: black;
  }

  .btn-confirm > div {
    background-color: red;
    width: 6rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 6px;
    color: white;
    font-size: 1.4rem;
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
    padding: 1rem;
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
