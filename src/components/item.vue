<template>
    <div class="item" @click="open">
        <span class="state">{{ someitem.isComplete ? "已完成" : someitem.time }}</span>
        <p class="title">{{ someitem.title }}</p>
        <span class="icon" @click.stop="toggle">{{ someitem.isComplete ? "删除" : "完成" }}</span>

        <!-- <span class="state">dadfas</span>
        <p class="title">dfasfd</p>
        <span class="icon" @click="toggle">fddsg</span> -->
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "todo-item",
    props: ["someitem"],
    methods: {
        open () {
            this.$emit("open", this.someitem)
        },
        toggle () {
            // this.$emit("toggle")
            if (this.someitem.isComplete) {
                this.delete_complete(this.someitem)
                // this.$store.dispatch("delete_complete", this.someitem)
            } else {
                this.delete_list(this.someitem)
                this.add_complete({complete: {...this.someitem, isComplete: true}})
            }
        },
        ...mapActions(["delete_list", "add_complete", "delete_complete"])
    }
}
</script>

<style lang="scss" scoped>
.item {
    box-sizing: border-box;
    width: 90%;
    // height: 2.5rem;
    line-height: 2.5rem;
    margin: 1rem auto;
    background: #fff;
    border-radius: .5rem;
    // display: flex;
    // justify-content: space-between;
    font-size: .8rem;
    padding: 0 .5rem;

    &::after {
        content: "";
        display: table;
        clear: both;
    }
}

.state {
    float: left;
    color: #32c9ff;
    width: 25%;
    text-align: left;
}

.title {
    float: left;
    color: #ccc;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.icon {
    float: right;
    width: 12%;
    text-align: center;
}
</style>

