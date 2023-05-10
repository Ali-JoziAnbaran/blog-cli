<template>
  <div class="header">
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>Contact</li>
      <li>About</li>
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
</style>
