<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">{{post.name}}</h1>
                <p>{{post.slug}}</p>
                <p>{{post.description}}</p>
                <router-link to="/admin/posts" class="btn btn-primary">Return to posts</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SinglePostsView",
    data: function () {
        return {
            post: {},
        };
    },
    mounted() {
        const allPosts = localStorage.getItem("posts")
                ? JSON.parse(localStorage.getItem("posts"))
                : [];
        this.post = allPosts.find(post => post.id == this.$route.params.id );
    },
};
</script>
<style scoped>
.row {
    display: flex;
}
</style>
