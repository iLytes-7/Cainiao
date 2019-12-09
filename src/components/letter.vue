<template>
  <div>
    <div class="head">
      <div>主题</div>
      <div>信息</div>
      <div>时间</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.head{
  text-align: center;
  width: 100%;
  display: flex;
  background-color: red;
  justify-content: space-between;
}
  .head>div{
    width: 33%;
    background-color: blue;
  }
</style>
