<template>
  <van-overlay :show="isShow" class="loading">
      <van-loading style="position:absolute;top: 50%;left:50%;transform: translate(-50%,-50%) " size="4rem" vertical>加载中...</van-loading>
  </van-overlay>
</template>

<script>
export default {
    name: "Loading",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isShow() {
        return this.show
      }
    }
}
</script>

<style scoped>

</style>
