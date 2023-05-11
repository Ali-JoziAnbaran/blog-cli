<template>
  <div class="side-bar">
    <div>
      <h4>Top Blogs</h4>
      <ul>
        <li>
          <a href="">
            <img
              src="../../public/credible-blog-illustr-1400x1400.png"
              alt=""
            />
            <h5>Blog 1</h5>
            <p>the first blog ...</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/OPSPCArtboard-7-blog.webp" alt="" />
            <h5>Blog 1</h5>
            <p>the first blog ...</p>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4>New Blogs</h4>
      <ul>
        <li>
          <a href="">
            <img
              src="../../public/credible-blog-illustr-1400x1400.png"
              alt=""
            />
            <h5>Blog 1</h5>
            <p>the first blog ...</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/OPSPCArtboard-7-blog.webp" alt="" />
            <h5>Blog 1</h5>
            <p>the first blog ...</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
  width: 25%;
  display: flex;
  flex-direction: column;
}
.side-bar > div {
  display: flex;
  width: 100%;
  flex-direction: column;
}
h4{
  background-color: #eee;
  margin: 10px 0;
  padding: 14px;
}
ul {
  list-style-type: none;
  margin: 0;
}
ul li {
  padding: 10px;
  float: left;
  border-bottom: 1px solid #ddd;
}
ul li a {
  float: left;
  width: 100%;
}
ul li a img {
  float: left;
  width: 30%;
}
</style>
