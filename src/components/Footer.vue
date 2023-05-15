<template>
    <div class="container-fluid">
        <div class="row footer">
            <div class="col-md-4">
                <h4>Quick Access</h4>
                <ul>
                    <li>Login</li>
                    <li>Sign in</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div class="col-md-4 blog-list">
                <h4>Top Of Blogs</h4>
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
                                <b-card-img src="OPSPCArtboard-7-blog.webp" alt="Image" class="rounded-0"></b-card-img>
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
            <div class="col-md-4 on-map">
                <h4>Our Company on Map</h4>
                <img @click="modalShow = !modalShow" src="rotate-a-google-map-on-pc-or-mac-1.jpg" alt="" class="modal-image" />
                <b-modal v-model="modalShow" size="xl" ok-only ok-title="Cancel"><img src="rotate-a-google-map-on-pc-or-mac-1.jpg" alt="" /></b-modal>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    data: function(){
        return {
            modalShow: false
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
}
.modal-image {
    cursor: pointer;
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

</style>
