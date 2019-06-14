import Vue from "vue"
import Vuex from "vuex"
import store from "../../vuex/index"
Vue.use(Vuex)

import component from "./popup.vue"

let hasElement = false
let Con = Vue.extend (component)
let instance = getInstance()

function getInstance () {
    if (!instance) {
        instance = new Con({
            store
        })
    } 

    return instance
}

function popup ( data ) {

    // let instance = getInstance()
    if (!hasElement) {
        document.body.appendChild(instance.$mount().$el)
        hasElement = true
    }
    
    instance.title = data.title ? data.title : ""
    instance.content = data.content ? data.content : ""
    instance.show = data.show ? data.show : true
    instance.isEdit = data.isEdit ? data.isEdit : false
    instance.justSee = data.justSee ? data.justSee : false
    instance.someitem = data.someitem ? data.someitem : {}

    
}

// export const popup_plugin = instance

export default {
    install (Vue) {
        Vue.popup = popup
        Vue.prototype.$popup = popup
    }
}