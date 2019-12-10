<template>
  <div id="app">
    <van-sticky>
    <van-nav-bar
      class="metaTitle"
      :title='activeMenu'
      :left-arrow="show"
      @click-left="onClickLeft"
    />
    </van-sticky>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        show: true
      }
    },
    computed: {
      activeMenu() {
        const route = this.$route
        const {meta, path} = route
        if(path === '/'){
          this.show = false
        }else {
          this.show = true
        }
        // if set path, the sidebar will highlight the path you set
        return meta.title
      }
    },
    mounted() {

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    /*width: 90%;*/
    margin: auto;
  }

  html {
    font-size: 10px;
    height: 100%;
    width: 100%;
    background-color: #230F40;
    color: white;
  }
  body{
    height: 100%;
  }

  iframe .app-header {
    display: none;
  }

  .metaTitle {
    background-color: #230F40;
  }

  .verification .van-radio__label{
    color: white;
  }
  .verification .van-image__error, .verification .van-image__img, .verification .van-image__loading{
    border-radius: 12rem;
  }

  .van-hairline--bottom::after {
    border: none;
  }

  .van-nav-bar__title {
    color: white;
    font-size: 1.8rem;
  }

  .van-nav-bar .van-icon {
    color: white;
    font-size: 2rem;
  }

  .line {
    height: 1rem;
    width: 100%;
    background-color: #291744;
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    html {
      font-size: 11px !important
    }
  }

  @media screen and (min-width: 376px) and (max-width: 414px) {
    html {
      font-size: 12px !important
    }
  }

  @media screen and (min-width: 415px) and (max-width: 639px) {
    html {
      font-size: 15px !important
    }
  }

  @media screen and (min-width: 640px) and (max-width: 719px) {
    html {
      font-size: 20px !important
    }
  }

  @media screen and (min-width: 720px) and (max-width: 749px) {
    html {
      font-size: 22.5px !important
    }
  }

  @media screen and (min-width: 750px) and (max-width: 799px) {
    html {
      font-size: 23.5px !important
    }
  }

  @media screen and (min-width: 800px) {
    html {
      font-size: 25px !important
    }
  }

  .van-checkbox__icon {
    font-size: 1rem;
  }

  .van-checkbox__label {
    line-height: 2.4rem;
    color: #AFACB4;
  }

  .van-cell:not(:last-child)::after {
    display: none;
  }

  .van-field__control {
    color: #DFDFDF;
    font-size: 1.4rem;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    /*color: rgba(255,255,255,0.3);*/
  }
  .bill .van-dropdown-menu__title,.cuxiao .van-dropdown-menu__title{
    font-size: 1.4rem;
    color: #AFACB4;
    line-height: 1.5;
  }
  .bill .van-dropdown-menu__title::after{
    border-width: 0.2rem;
  }
  .bill .van-popup,.cuxiao .van-popup{
    background-color: #291744;
  }
  .bill .van-dropdown-menu__item,.cuxiao .van-dropdown-menu__item{
    text-align: left;
    width: 26%;
    flex: none;
  }
  .bill .van-dropdown-menu{
    height: 4.5rem;
  }
  .line{
    height: 0.7rem;
    width: 101vw;
    background-color: #291744;
    margin-left: -2rem;
  }
  .transferAmount .van-cell{
    background-color: #230F40;
  }
</style>
