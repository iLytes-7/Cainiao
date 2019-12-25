<template>
  <div class="forget">
    <p class="title"></p>
    <van-field v-model="oldpwd" type="password" placeholder="请填写旧取款密码"/>
    <van-field v-model="newpwd" type="password" placeholder="请输入您的新取款密码"/>
    <span v-show="newpwdError">取款密码 不能为空,且长度不能低于六位</span>
    <van-field v-model="cnewpwd" type="password" placeholder="请重新输入您的取款密码"/>
    <span v-show="cnewpwdError">确认取款密码不能为空，且需要与取款密码一致！</span>
    <van-button class="btn" color="#FF6D44"  @click="submit">确定</van-button>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
    import { updatePlayerWithdrawalPassword } from '@/api/user'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                oldpwd:'',
                newpwd:'',
                cnewpwd:'',
                loading: false,
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
                if (this.newpwd.length < 6) {
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
                    old_password:this.oldpwd,
                    new_password:this.newpwd,
                    force_reset: 1
                }
                this.loading = true
                updatePlayerWithdrawalPassword(data).then(response => {
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
