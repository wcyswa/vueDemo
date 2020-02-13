import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        /*{
            // path: '/',
            // component: () => import('./components/HelloWorld.vue'),
            // redirect:'/product',
            children:[
                {
                    path:'/product',
                    component:()=>import('./views/product/Product.vue'),
                    meta:{
                        keepAlive:true //是否缓存组件
                    }
                },
                {
                    path:'/member',
                    component:()=>import('./views/member/Member.vue'),
                    meta: {
                        keepAlive: false,
                    }
                }
            ]
        },*/
        {
            path:'/product',
            component:()=>import('./views/product/Product.vue'),
            meta:{
                keepAlive:true //是否缓存组件
            }
        },
        {
            path:'/member',
            component:()=>import('./views/member/Member.vue'),
            meta: {
                keepAlive: false,
            }
        },
        {
            path: '/login',
            component: () => import('./views/member/Login.vue'),
        }
    ]
});

// 全局路由钩子函数 对全局有效 2-4目前还没写到数据层面
// router.beforeEach((to, from, next) => {
//     let auth = to.meta.auth;
//     let token = store.getters["login/token"];
//
//     if (auth) {
//         // 需要登录
//         if (token) {
//             next();
//         } else {
//             next({
//                 path: "/login",
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         }
//     } else {
//         next();
//     }
// });

export default router;