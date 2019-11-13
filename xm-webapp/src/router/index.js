// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
// import  login from "../components/login";
import home from "../view/home";
import classify from "../view/classify";
import mine from "../view/mine";
import cart from "../view/cart";
import main from "../view/main";
import dist from "../view/details";
import login from "../components/login";

Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:'/',redirect:'/main/home'},
        {path: '/dist:id', component: dist},
        {path:'/login', component:login},
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:'home',
                    component:home
                },
                {
                    path:'classify',
                    component:classify
                },
                {
                    path:'mine',
                    component:mine
                },
                {
                    path:'cart',
                    component:cart
                }
            ]
        }

    ]

})
export default router