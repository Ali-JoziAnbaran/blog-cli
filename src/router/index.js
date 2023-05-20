import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostsView from '../views/PostsView.vue'
import SinglePostView from '../views/SinglePostView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/admin/posts',
        name: 'posts',
        component: PostsView
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: SinglePostView
    },
]


const router = new VueRouter({
    made: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router