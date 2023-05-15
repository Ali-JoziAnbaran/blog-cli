<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-9"><HelloWorld msg="This is about page" /></div>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
    name: "AboutView",
    components: {
        HelloWorld,
    },
};
</script>