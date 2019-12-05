<template>
  <div id="app">
    <h1 class="title">{{activeMenu}}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        activeMenu() {
            const route = this.$route
            const {meta, path} = route
            // if set path, the sidebar will highlight the path you set
            return meta.title
        }
    },
    mounted() {
        console.log(this.activeMenu);
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  html, body {
    font-size: 10px;
    height: 100%;
    width: 100%;
    background-color: #230F40;
    color: white;
  }
  iframe .app-header{
    display: none;
  }

  .title {
    text-align: center;
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
</style>
