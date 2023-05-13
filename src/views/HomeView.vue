<template>
    <div class="row">
        <SideBar></SideBar>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import SideBar from "../components/SideBar.vue";

export default {
    name: "HomeView",
    components: {
        HelloWorld,
        SideBar,
    },
};
</script>
<style scoped>
.row{
    display: flex;
}
</style>