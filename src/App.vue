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
    <router-view :key="key"/>
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
      },
      key() {
        return this.$route.path + Math.random()
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

<style lang="scss">
  * {
    box-sizing: border-box !important;
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


  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    /*width: 90%;*/
    margin: auto;

    .metaTitle {
      background-color: #230F40;
    }
    .loading.van-overlay{
      z-index: 999999 !important;
    }

    iframe .app-header {
      display: none;
    }

    .withdrow-page .van-field__control {
      font-size: 2.4rem;
      line-height: 3rem;
      padding: 0rem 0.8rem;
    }
    .user .van-slider__button {
      display: none;
    }
    .transform-page .van-field__control {
      font-size: 2.4rem;
      line-height: 3rem;
      padding: 0rem 0.5rem;
    }

    .verification .van-radio__label {
      color: white;
    }

    .verification .van-image__error, .verification .van-image__img, .verification .van-image__loading {
      border-radius: 12rem;
    }

    .verification .van-field__control {
      color: #AFACB4;
    }

    .verification .info-row .van-field__control {
      text-align: right;
    }

    .charge-page .van-ellipsis {
      color: white;
    }

    .charge-page .van-dropdown-menu__title::after {
      color: white;
    }

    .charge-page .van-dropdown-menu {
      height: 3.8rem;
    }

    .charge-page .van-dropdown-item__option {
      width: 90%;
      margin: 0 auto;
      background-color: #32204C;
    }

    .charge-page .van-dropdown-item--down > div {
      background-color: #230F40;
      opacity: 0.9;
    }

    .charge-page .van-cell__title {
      color: white;
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

    .van-checkbox__icon {
      font-size: 1rem;
      height: auto;
      line-height: normal;
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

    .bill .van-dropdown-menu__title, .cuxiao .van-dropdown-menu__title {
      font-size: 1.4rem;
      color: #AFACB4;
      line-height: 1.5;
    }

    .bill .van-dropdown-menu__title::after {
      border-width: 0.2rem;
    }

    .bill .van-popup, .cuxiao .van-popup {
      background-color: #291744;
    }

    .bill .van-dropdown-menu__item, .cuxiao .van-dropdown-menu__item {
      text-align: left;
      width: 26%;
      flex: none;
    }

    .bill .van-dropdown-menu {
      height: 4.5rem;
    }

    .line {
      height: 0.7rem;
      width: 100%;
      background-color: #291744;
    }

    .transferAmount .van-cell {
      background-color: #230F40;
    }
  }
</style>
