import { createRouter, createWebHistory } from "vue-router";
import DashboardComponent from "./components/DashboardComponent.vue";
import LoginComponent from './components/LoginComponent.vue';
import AdminComponent from './components/AdminComponent.vue';

//declare router
const routes = [
    {
        path: '/login',
        name: 'LoginComponent',
        component : LoginComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component : DashboardComponent,
        meta : { requireAuth: true }
    },
    {
        path: '/Admin',
        name: 'admin',
        component : AdminComponent,
        meta : { requireAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')

    if (to.matched.some(record => record.meta.requireAuth)){
        if(!isAuthenticated){
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;