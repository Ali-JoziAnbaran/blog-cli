<template>
  <div class="footer">
    <div>
      <h4>Quick Access</h4>
      <ul>
        <li>Login</li>
        <li>Sign in</li>
        <li>Blogs</li>
      </ul>
    </div>
    <div class="blog-list">
      <h4>Top Of Blogs</h4>
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
    <div class="on-map">
      <h4>Our Company on Map</h4>
      <img src="../../public/rotate-a-google-map-on-pc-or-mac-1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.footer div {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px;
}
.footer ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}
.footer div img {
  width: 100%;
}
.footer ul li {
  display: block;
  padding: 15px 40px;
}
.on-map {
  flex-direction: column;
}
.blog-list {
  flex-direction: column;
}
.footer h4 {
  background-color: #eee;
  margin: 10px 0;
  padding: 14px;
}
.blog-list ul {
  list-style-type: none;

  margin: 0;
}
.blog-list ul li {
  padding: 10px;
  float: left;
  border-bottom: 1px solid #ddd;
}
.blog-list ul li a {
  float: left;
  width: 100%;
}
.blog-list ul li a img {
  float: left;
  width: 30%;
}
</style>
