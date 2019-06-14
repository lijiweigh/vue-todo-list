<template>
    <div class="index">
        <head-top>
            <template #label>
                <p class="label" v-show="!showTitle">记下你想记的事</p>
            </template>
            <template #add>
                <button class="addNew" @click="add" v-show="!showTitle">新建</button>
            </template>
            <template #title>
                <div class="title" v-show="showTitle">已完成任务</div>
            </template>
        </head-top>

        <router-view></router-view>

        <foot-bot></foot-bot>

        <!-- <transition name="popup">
            <popup v-show="showPopup" @cancel="showPopup = false"></popup>
        </transition> -->
    </div>
</template>

<script>
import headTop from "../components/head"
import footBot from "../components/footer"
import item from "../components/item"
import popup from "../components/popup"
import { mapMutations } from "vuex"

import Vue from "vue"
import popup_plugin from "../plugins/popup"
Vue.use(popup_plugin)

export default {
    name: "index",
    data () {
        return {
            showPopup: false,
            showTitle: false
        }
    },
    methods: {
        add () {
            // this.showPopup = true
            this.$popup ({
                show: true
            })
        },
        // ...mapMutations(["save_to_storage"])
    },
    watch: {
        $route: {
            immediate: true,
            handler (value) {
                if (value.name == "list") {
                    this.showTitle = false
                } else {
                    this.showTitle = true
                }
            }
        }
    },
    components: {
        headTop,
        footBot,
        item,
        // popup
    },
    mounted() {
        console.log(this.$route.name)
    }
    // beforeDestroy () {
    //     this.save_to_storage ()
    // }
}
</script>

<style lang="scss" scoped>
.label, .addNew {
    color: #fff;
    line-height: 2.5rem;
}

.title {
    width: 100%;
    color: #fff;
    line-height: 2.5rem;
    text-align: center;
}

.addNew {
    background: none;
    border: none;
    outline: none;
}



.popup-enter-active, .popup-leave-active {
    transition: .2s;
    
}

.popup-enter, .popup-leave-to {
    opacity: 0;
    // width: 1rem;
    // height: 1rem;
    
    transform: scale(.1);
}

.popup-enter-to, .popup-leave {
    // left: 0;
    // top: 0;
    // transform: translate(0, 0);
}


</style>
