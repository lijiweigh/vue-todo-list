<template>
    <div class="footer">
        <span class="list" :class="{'active': currentIndex === index}" @click="change(index)" v-for="(item, index) in buttonList" :key="index">{{item}}</span>
    </div>
</template>

<script>
export default {
    name: "foot-bot",
    data () {
        return {
            buttonList: ["清单", "完成"],
            urlList: ["list", "complete"],
            currentIndex: 0
        }
    },
    methods: {
        change (index) {
            this.currentIndex = index
            this.$router.push({name: this.urlList[index]})
        }
    },
    created () {
        if (this.$route.name == "complete") {
            this.currentIndex = 1
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    // padding: 0 3rem;
    background: #fff;
}

.list, .complete {
    // padding: 0 1rem;
    text-align: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    color: #ccc;
    line-height: 2.5rem;
}

.active {
    color: #32c9ff;
}
</style>

