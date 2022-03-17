import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({routes: [
    {path: '/login', component: Login},
    {path: '/', redirect: '/login'},
    {path: '/home', component: Home},

]})
router.beforeEach((to,from,next)=>{
    if(to.path == '/login'){
        console.log('to.path:','login')
        next();
    }else{
        console.log('to.path:',to.path)
        var token = window.localStorage.getItem('token');
        console.log('token:',token)
        if(token != null){
            next();
        }else{
            next('/login');
        }
    }
})
export default router
