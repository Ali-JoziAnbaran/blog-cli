<template>
    <div class="side-bar">
        <div>
            <h4>Top Blogs</h4>
            <b-card no-body class="overflow-hidden">
                <a href="">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="credible-blog-illustr-1400x1400.png" alt="Image"
                                class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body class="p-0 pt-3">
                                <b-card-text>
                                    <h5>Blog 1</h5>
                                    <p>the first blog ...</p>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </a>
            </b-card>
            <b-card no-body class="overflow-hidden mt-1">
                <a href="">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="OPSPCArtboard-7-blog.webp" alt="Image"
                                class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body class="p-0 pt-3">
                                <b-card-text>
                                    <h5>Blog 2</h5>
                                    <p>the twice blog ...</p>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </a>
            </b-card>
        </div>
        <div class="mt-4">
            <h4>New Blogs</h4>
            <b-card no-body class="overflow-hidden mt-1" v-for="post in posts" :key="post.id">
                <a href="">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img src="OPSPCArtboard-7-blog.webp" alt="Image"
                                class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body class="p-0 pt-3">
                                <b-card-text>
                                    <h5>{{ post.name }}</h5>
                                    <p>{{ post.description }}</p>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </a>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    computed: {
        posts: function(){
            return localStorage.getItem("posts")
            ? JSON.parse(localStorage.getItem("posts"))
            : [];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h4 {
    background-color: #eee;
    margin: 10px 0;
    padding: 14px;
}
</style>
