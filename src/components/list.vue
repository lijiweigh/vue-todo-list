<template>
    <div class="list">
        <item @open="open" @toggle="toggle" v-for="(item, index) in list" :key="index" :someitem="item" v-show="list.length"></item>
        <div class="no"  v-show="!list.length">no</div>
        <!-- <transition name="popup">
            <popup v-show="showPopup" :isEdit="true" :someitem="someitem" @cancel="showPopup = false"></popup>
        </transition> -->
    </div>
</template>

<script>
import item from "./item"
// import popup from "./popup"
import { mapState } from "vuex"

import Vue from "vue"
import popup_plugin from "../plugins/popup"
Vue.use(popup_plugin)

export default {
    name: "list",
    data (){
        return {
            showPopup: false,
            someitem: {}
        }
    },
    computed : {
        ...mapState(["list"])
    },
    components: {
        item,
        // popup
    },
    methods: {
        open (someitem) {
            // this.showPopup = true
            this.someitem = someitem
            this.$popup ({
                show: true,
                isEdit: true,
                someitem,
                ...someitem
            })
        },
        toggle () {

        }
    },
    mounted() {
        console.log("list mounted")
        this.$forceUpdate()
    }
}
</script>

<style lang="scss" scoped>
.popup-enter-active, .popup-leave-active {
    transition: .2s;
    
}

.popup-enter, .popup-leave-to {
    opacity: 0;
    // width: 1rem;
    // height: 1rem;
    
    transform: scale(.1);
}
</style>
