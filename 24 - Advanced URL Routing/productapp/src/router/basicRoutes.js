import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import Preferences from "../components/Preferences";
import Products from "../components/Products";
import MessageDisplay from "../components/MessageDisplay";

const FilteredData = () => import("../components/FilteredData");

import dataStore from "../store";

export default [

    { path: "/preferences", component: Preferences },
    {
        path: "/products", component: Products,
        children: [{ name: "table", path: "list", component: ProductDisplay },
        {
            name: "editor", path: ":op(create|edit)/:id(\\d+)?",
            component: ProductEditor
        },
        { path: "", redirect: "list" }]
    },
    { path: "/edit/:id", redirect: to => `/products/edit/${to.params.id}` },
    { path: "/filter/:category", component: FilteredData,
        beforeEnter: (to, from, next) => {
            dataStore.commit("setComponentLoading", true);
            next();
        } 
    },
    { path: "/hello", component: MessageDisplay, props: { message: "Hello, Adam"}},
    { path: "/hello/:text", component: MessageDisplay, 
        props: (route) => ({ message: `Hello, ${route.params.text}`})},    
    { path: "/message/:message", component: MessageDisplay, props: true},            
]
