<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="row">
                <div class="col-5">
                    <b-form
                        @submit="onSubmit"
                        @reset="onReset"
                        enctype="multipart/form-data"
                    >
                        <b-form-group
                            label-cols="6"
                            label-cols-lg="3"
                            class="text-left"
                            label-size="sm"
                            label="Post Name:"
                            label-for="input-name"
                        >
                            <b-form-input
                                id="input-name"
                                size="sm"
                                v-model="form.name"
                            ></b-form-input>
                            <span class="text-danger" v-if="errors.name">{{
                                errors.name
                            }}</span>
                        </b-form-group>
                        <b-form-group
                            label-cols="6"
                            label-cols-lg="3"
                            class="text-left"
                            label-size="sm"
                            label="Slug:"
                            label-for="input-slug"
                        >
                            <b-form-input
                                id="input-slug"
                                size="sm"
                                v-model.trim="form.slug"
                            ></b-form-input>
                            <span class="text-danger" v-if="errors.slug">{{
                                errors.slug
                            }}</span>
                        </b-form-group>
                        <b-form-group
                            label-cols="6"
                            label-cols-lg="3"
                            class="text-left"
                            label-size="sm"
                            label="Description:"
                            label-for="textarea-description"
                        >
                            <b-form-textarea
                                id="textarea-description"
                                size="sm"
                                v-model="form.description"
                            ></b-form-textarea>
                            <span
                                class="text-danger"
                                v-if="errors.description"
                                >{{ errors.description }}</span
                            >
                        </b-form-group>

                        <b-button
                            type="submit"
                            variant="primary"
                            class="mr-3"
                            >{{ editId ? "Update" : "Submit" }}</b-button
                        >
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
                <div class="col-7">
                    <b-table hover :items="table" :fields="tableCells">
                        <template v-slot:cell(name)="{ item }">
                            <span>
                                <router-link :to="`/posts/${item.id}`">{{item.name}}</router-link>
                            </span>
                        </template>
                        <template v-slot:cell(edit)="{ item }">
                            <span
                                ><b-btn
                                    @click="editItem(item)"
                                    variant="primary"
                                    ><b-icon icon="pencil-fill"></b-icon></b-btn
                            ></span>
                        </template>
                        <template v-slot:cell(delete)="{ item }">
                            <span
                                ><b-btn
                                    @click="showDeletePopup(item)"
                                    variant="danger"
                                    ><b-icon icon="trash-fill"></b-icon></b-btn
                            ></span>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostsView",
    data: function () {
        return {
            form: {
                name: "",
                slug: "",
                description: null,
            },
            errors: {
                name: "",
                slug: "",
                description: "",
            },
            tableCells: ["id", "name", "description", "edit", "delete"],
            table: [],
            editId: "",
            deleteId: "",
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            if (!this.checkValidation(this.form)) return false;
            if (this.editId) {
                this.$store.commit('updatePost', {
                    ...this.form,
                    editId: this.editId
                });
                this.editId = '';

                this.makeToast("Post has been updated.", "primary");
            } else {
                this.$store.commit('addPost', {
                    ...this.form
                });
                this.makeToast("Post has been added.", "primary");
            }
            this.fetchTable();
            this.form.name = "";
            this.form.slug = "";
            this.form.description = "";
        },
        onReset(event) {
            event.preventDefault();
            this.form.name = "";
            this.form.slug = "";
            this.form.description = "";
        },
        checkValidation(form) {
            this.errors = {};
            let returnForm = true;
            if (!form.name) {
                this.errors.name = "Name is required";
                returnForm = false;
            }
            const allPosts = localStorage.getItem("posts")
                ? JSON.parse(localStorage.getItem("posts"))
                : null;
            let findSlug = false;
            if (allPosts)
                findSlug = allPosts.find((post) => post.slug === form.slug);
            if (!form.slug) {
                this.errors.slug = "Slug is required";
                returnForm = false;
            } else if (form.slug.indexOf(" ") >= 0) {
                this.errors.slug = "Please enter the correct slug";
                returnForm = false;
            } else if (findSlug && findSlug.id !== this.editId) {
                this.errors.slug = "Slug already exists";
                returnForm = false;
            }
            if (!form.description) {
                this.errors.description = "Description is required";
                returnForm = false;
            }

            return returnForm;
        },
        editItem(row) {
            const allPosts = JSON.parse(localStorage.getItem("posts"));
            const editId = allPosts.findIndex((post) => post.id === row.id);

            this.form.name = allPosts[editId].name;
            this.form.slug = allPosts[editId].slug;
            this.form.description = allPosts[editId].description;
            this.editId = row.id;
        },
        showDeletePopup(row) {
            this.$swal({
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.commit('removePost', {
                        id: row.id
                    });
                    const allPosts = JSON.parse(localStorage.getItem("posts"));
                    localStorage.setItem("posts", JSON.stringify(allPosts.filter(post => post.id !== row.id)));
                    this.$swal('Deleted!', '', 'success')
                    this.fetchTable();
                }
            })
        },
        fetchTable() {
            const allPosts = this.$store.state.posts;
            const tablePosts = [];
            if (allPosts) {
                allPosts.map((post) => {
                    tablePosts.push({
                        id: post.id,
                        name: post.name,
                        description: post.description,
                    });
                });
            }
            this.table = tablePosts;
        },
        makeToast(text) {
            this.$swal(text);
        },
    },
    watch: {
        "form.name": function (newVal) {
            this.form.slug = newVal.replace(/\s+/g, "-").toLowerCase();
        },
    },
    computed: {
        posts: function() {
            this.fetchTable();
            return this.$store.state.posts;
        }
    },
    mounted() {
        this.fetchTable();
    },
};
</script>
<style scoped>
.row {
    display: flex;
}
</style>
