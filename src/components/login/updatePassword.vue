<template>
  <div class="forget">
    <p class="title"></p>
    <van-field v-model="oldpwd" type="password" placeholder="请输入您的旧登陆密码"/>
    <span v-show="oldpwdError">请填写旧登陆密码！</span>
    <van-field v-model="newpwd" type="password" placeholder="请输入您的新登陆密码"/>
    <span v-show="sameName">登陆密码 不能与用户名相似！</span>
    <span v-show="sameOld">登陆密码 不能与旧密码相似！</span>
    <span v-show="newpwdError">登陆密码 长度必须为6-12之间由小写英文字母与数字组成！</span>
    <van-field v-model="cnewpwd" type="password" placeholder="请重新输入您的新登陆密码"/>
    <span v-show="cnewpwdError">确认登陆密码不能为空，且需要与新登陆密码一致！</span>
    <van-button class="btn" color="#FF6D44"  @click="submit">确定</van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import { updatePlayerPassword,updatePlayerWithdrawalPassword} from '@/api/user'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                oldpwd:'',
                newpwd:'',
                cnewpwd:'',
                loading: false,
                sameName:false,
                sameOld:false,
                oldpwdError:false,
                newpwdError:false,
                cnewpwdError:false
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        methods: {
            submit() {
                let password = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,12}$/;
                if (this.oldpwd === '') {
                    this.oldpwdError = true
                    return;
                }else {
                    this.oldpwdError = false
                }
                if (this.name === this.newpwd) {
                    this.sameName = true;
                    return;
                }else {
                    this.sameName = false;
                }
                if (this.oldpwd === this.newpwd) {
                    this.sameOld = true;
                    return;
                }else {
                    this.sameOld = false;
                }
                if (!password.test(this.newpwd)) {
                    this.newpwdError = true
                    return;
                }else {
                    this.newpwdError = false
                }
                if (this.newpwd != this.cnewpwd) {
                    this.cnewpwdError = true;
                    return;
                }else {
                    this.cnewpwdError = false;
                }
                let data = {
                    api_key: "ea443b05c7067089bd2716f47257ee73",
                    username: this.name,
                    token: this.token,
                    password_old:this.oldpwd,
                    password:this.newpwd
                }
                this.loading = true
                updatePlayerPassword(data).then(response => {
                    let data = {
                        api_key: "ea443b05c7067089bd2716f47257ee73",
                        username: this.name,
                        token: this.token,
                        new_password:this.newpwd,
                        force_reset: 1
                    }
                    updatePlayerWithdrawalPassword(data).then(response => {
                        console.log(1);
                    })
                    this.$toast.success("修改成功！")
                    this.$router.go(-1);
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>
  .forget>span {
    color: red;
    padding-left: 1rem;
  }
</style>
