<template>
    <div class="complete">
        <item @open="open" @toggle="toggle" v-for="(item, index) in complete" :key="index" :someitem="item"  v-show="complete.length"></item>
        <div class="no"  v-show="!complete.length">no</div>
        <!-- <transition name="popup">
            <popup v-show="showPopup" :justSee="true" :someitem="someitem" @cancel="showPopup = false"></popup>
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
    name: "complete",
    data () {
        return {
            showPopup: false,
            someitem: {}
        }
    },
    components: {
        item,
        // popup
    },
    methods: {
        open (someitem) {
            this.$popup ({
                show: true,
                justSee: true,
                someitem,
                ...someitem
            })
        },
        toggle () {
            
        }
    },
    computed: {
        ...mapState(["complete"])
    },
    mounted () {
        console.log("complete mounted")
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
