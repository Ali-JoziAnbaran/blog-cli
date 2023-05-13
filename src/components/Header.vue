<template>
  <div class="header">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  background: #ddd;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
li {
  float: left;
  padding: 20px 30px;
}
.nav .router-link-exact-active {
   color: #000;
   background: red;
   text-decoration: none;
 }
</style>
