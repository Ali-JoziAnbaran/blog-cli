import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : []
    },
    getters: {
        singlePostData: (state) => (id) => {
            return state.posts.find(post => post.id == id)
        }
    },
    mutations: {
        addPost(state, formData) {
            state.posts.push({ ...formData, id: generateId(state.posts) });
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        updatePost(state, formData) {
            const editRow = state.posts.find(
                (post) => post.id === formData.editId
            );
            editRow.name = formData.name;
            editRow.slug = formData.slug;
            editRow.description = formData.description;

            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        removePost(state, { id }) {
            state.posts = state.posts.filter(post => post.id !== id);

            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
    }
})

function generateId(posts){
    const allPosts = posts;
    if(allPosts){
        let newId = Math.floor((Math.random() * 10000) + 1);
        while(allPosts.find(post => post.id === newId)){
            newId = Math.floor((Math.random() * 10000) + 1);
        }
        return newId;
    }else{
        return 1;
    }
}

export default store