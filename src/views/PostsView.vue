<template>
  <div class="container-fluid">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-3">
          <SideBar />
        </div>
        <div class="col-md-9">
          <div class="col-md-6">
            <b-form @submit="onSubmit" @reset="onReset" enctype="multipart/form-data">
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
                label="Image:"
                label-cols-sm="3"
                class="text-left"
                label-size="sm"
              >
                <b-form-file
                  id="file-small"
                  size="sm"
                  v-model="form.image"
                  accept=".jpg, .png, .gif"
                  :state="Boolean(form.image)"
                ></b-form-file>
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
                <span class="text-danger" v-if="errors.description">{{
                  errors.description
                }}</span>
              </b-form-group>

              <b-button type="submit" variant="primary" class="mr-3"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from "../components/SideBar.vue";

  export default {
    name: "PostsView",
    components: {
      SideBar,
    },
    data: function () {
      return {
        form: {
          name: "",
          slug: "",
          image: null,
          description: null,
        },
        errors: {
          name: "",
          slug: "",
          description: "",
        },
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        console.log(this.form.image);
        if (!this.checkValidation(this.form)) return false;
        const allPosts = localStorage.getItem("posts")
          ? JSON.parse(localStorage.getItem("posts"))
          : [];
        allPosts.push({...this.form, id: allPosts.length + 1});
        localStorage.setItem("posts", JSON.stringify(allPosts));
      },
      onReset(event) {
        event.preventDefault();
        this.form.name = "";
        this.form.slug = "";
        this.form.image = null;
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
        if(allPosts) findSlug = allPosts.find((post) => post.slug === form.slug);
        if (!form.slug) {
          this.errors.slug = "Slug is required";
          returnForm = false;
        } else if (form.slug.indexOf(" ") >= 0) {
          this.errors.slug = "Please enter the correct slug";
          returnForm = false;
        } else if (findSlug) {
          this.errors.slug = "Slug already exists";
          returnForm = false;
        }
        if (!form.description) {
          this.errors.description = "Description is required";
          returnForm = false;
        }

        return returnForm;
      },
    },
    watch: {
      "form.name": function (newVal) {
        this.form.slug = newVal.replace(/\s+/g, "-").toLowerCase();
      },
    },
  };
</script>
<style scoped>
  .row {
    display: flex;
  }
</style>
