<template>
    <div>
        <HelloWorld msg="This is About Page" />
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