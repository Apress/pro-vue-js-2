import Vue from "vue";
import VueRouter  from "vue-router";
import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";

const Authentication = () => 
    import(/* webpackChunkName: "admin" */ "../components/admin/Authentication");
const Admin = () => 
    import(/* webpackChunkName: "admin" */ "../components/admin/Admin");
const ProductAdmin = () => 
    import(/* webpackChunkName: "admin" */ "../components/admin/ProductAdmin");
const OrderAdmin = () =>  
    import(/* webpackChunkName: "admin" */ "../components/admin/OrderAdmin");
const ProductEditor = () => 
    import(/* webpackChunkName: "admin" */ "../components/admin/ProductEditor");

import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout}, 
        { path: "/thanks/:id", component: OrderThanks},
        { path: "/login", component: Authentication },
        { path: "/admin", component: Admin,
            beforeEnter(to, from, next) {
                if (dataStore.state.auth.authenticated) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                { path: "products/:op(create|edit)/:id(\\d+)?", 
                      component: ProductEditor },
                { path: "products", component: ProductAdmin },
                { path: "orders", component: OrderAdmin },
                { path: "", redirect: "/admin/products"}
            ]
        },
        { path: "*", redirect: "/"}
    ]
})
