import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import('./components/HelloWorld.vue'),
        },
        {
            path: '/login',
            component: () => import('./views/Member/login.vue'),
        }
    ]
});

export default router;