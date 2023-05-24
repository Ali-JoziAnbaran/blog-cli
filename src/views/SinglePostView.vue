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
    computed: {
        post: function(){
            return this.$store.getters.singlePostData(this.$route.params.id);
        }
    }
};
</script>
<style scoped>
.row {
    display: flex;
}
</style>
