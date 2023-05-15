<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3"><SideBar /></div>
                <div class="col-md-9"><HelloWorld msg="Welcome to Your Vue.js App" /></div>
            </div>
        </div>
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