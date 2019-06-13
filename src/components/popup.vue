<template>
    <div class="popup">
        <div class="input-box">
            <form class="form" @submit.prevent>
                <input type="text" class="title" placeholder="输入标题" v-model="title">
                <textarea class="content" placeholder="输入内容" v-model="content"></textarea>
                <div class="bot">
                    <span class="cancel" @click="cancel">取消</span>
                    <input type="submit" class="submit" @click="submit" :value="isEdit ? '修改' : '确认'">
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "popup",
    data () {
        return {
            title: "",
            content: ""  
        }
    },
    props: ["isEdit", "someitem", "justSee"],
    methods: {
        ...mapActions(["add_list", "modify_list"]),
        cancel () {
            this.$emit("cancel")
        },
        submit() {
            
            this.$emit("cancel")

            if (this.justSee) {
                return
            }

            let {title, content} = this
            let time = new Date()
            let id = time.getTime().toString()
            time = time.getMonth() + "月" + time.getDate() + "日"
            
            let list = {
                id,
                time,
                title,
                content,
                isComplete: false
            }
            console.log(list)

            if (this.isEdit) {
                let list = {...this.someitem, title, content}
                this.modify_list(list)
            } else {
                this.add_list({ list })
                this.title = ""
                this.content = ""
            }
            
        }
    },
    // mounted () {
    //     this.title = this.someitem.title
    //     this.content = this.someitem.content
    // },
    watch: {
        someitem () {
            this.title = this.someitem.title
            this.content = this.someitem.content
            
        }
    }
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #fff, $alpha: .5)
}

.input-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 80%;
    background: #eee;
    border-radius: .5rem;
    border: 1px solid skyblue;
}

.form {
    height: 100%;
}

.title, .content {
    width: 90%;
    box-sizing: border-box;
    padding: .5rem;
    color: #666;
    font-size: 1rem;
    border-radius: .5rem;
    margin: .5rem 0 .8rem 5%;
    font-family: "微软雅黑";
}

.title {
    width: 90%;
    height: 1.8rem;
    line-height: 1.8rem;
    // border-radius: .5rem;
    // margin: .5rem 0 .8rem 5%;
    // color: #666;
    // font-size: 1rem;
}

.content {
    height: 73%;
}

.bot {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    .cancel, .submit {
        width: 35%;
        line-height: 1.5rem;
        color: #fff;
        border-radius: .3rem;
        text-align: center;
    }

    .cancel {
        background: red;
    }

    .submit {
        background: green;
    }
}
</style>

