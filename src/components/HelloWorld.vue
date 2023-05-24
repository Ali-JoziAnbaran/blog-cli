<template>
    <div class="hello">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
                >vue-cli documentation</a
            >.
            <button @click="incrementNumber">+1 Count</button>
        </p>
        <h1>Count is : {{ count }}</h1>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String,
        },
        methods: {
            incrementNumber(){
                this.$store.commit('increment');
            }
        },
        computed: {
            count: function(){
                return this.$store.state.count;
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        width: 75%;
    }
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
