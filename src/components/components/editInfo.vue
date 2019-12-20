<template>
  <van-popup v-model="nameVisible" round closeable @close="handleCloseNickName" style="width: 80%;height: 40%;text-align: center">
    <div style="position: absolute; top: 10%;transform: translateY(-50%);
        left: 50%;transform: translateX(-50%);
        width: 90%;color: black;font-size: 1.4rem">
      {{title}}
    </div>
    <div style="text-align: center;color: black;position: relative; height: 100%;width: 100%">
      <div style="position: absolute; top: 30%;transform: translateY(-50%);
        left: 50%;transform: translateX(-50%);
        width: 90%">
        <van-field v-model="copyNickName" placeholder="请输入昵称" style="background-color: #eeeeee;width: 100%;color: black; border-radius: 6px "/>
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
</template>

<script>
  export default {
    name: "editInfo",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      nameVisible() {
        return this.show
      }
    },
    data() {
      return {
        copyNickName: ''
      }
    },
    methods: {
      handleCloseNickName() {
        this.show = false
      },
      confirmNickName() {
        if (this.copyNickName === '') {
          this.$toast.fail('昵称不能为空！');
        } else {
          this.$emit('editRealName',this.copyNickName)
          this.show = false
        }

      },
      cancelNickName() {
        this.show = false
      },
    }
  }
</script>

<style scoped>

</style>
