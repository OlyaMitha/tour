<template>
  <div id="app">
    <Menu></Menu>
    <Ksushabutton></Ksushabutton>
    <router-view/>
    <Marketing></Marketing>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .view {
    margin-bottom: 20px;
    button + button {
      margin-left: 6px;
    }
  }
  #header {
    text-align: center;
  }
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

<script>
  import $ from 'jquery';
  import Menu from "./components/Menu.vue";
  import Ksushabutton from "./components/Ksushabutton.vue";
  import Marketing from "./components/Marketing.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: "App",
    components: {
      Menu,
      Ksushabutton,
      Marketing,
      Footer,
    },
      mounted() {
        //console.log($('a:last').text());
       $('#nav a').mouseover(function(){
          var about = (this).attr('data-about');
          ('#header').text(about);
        });
      }
    }
</script>
