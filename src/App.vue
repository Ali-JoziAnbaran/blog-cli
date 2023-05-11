<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <SideBar></SideBar>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Footer,
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  display: flex;
  flex-direction: row;
}
ul{
  list-style-type: none;
}
</style>
