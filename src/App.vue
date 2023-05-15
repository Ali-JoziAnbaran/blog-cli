<template>
  <div id="app">
    <Header></Header>
    <div class="content my-5">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";

    export default {
        name: "AppView",
        components: {
            Header,
            Footer,
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
