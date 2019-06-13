import Vue from "vue"
import VueRouter from "vue-router"

import index from "../pages/index.vue"
import complete from "../components/complete.vue"
import list from "../components/list.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/index",
            name: "index",
            component: index,
            children: [
                {
                    path: "list",
                    name: "list",
                    component: list
                },
                {
                    path: "complete",
                    name: "complete",
                    component: complete
                }
            ]
        },
        // {
        //     path: "/complete",
        //     name: "complete",
        //     component: complete
        // },
        {
            path: "*",
            redirect: "/index/list"
        }
    ]
})