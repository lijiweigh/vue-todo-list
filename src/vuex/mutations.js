
let mutations = {
    add_list (state, data) {
        if (data.addAll) {
            state.list = state.list.concat(data.list)
        } else {
            state.list.push(data.list)   
        }
    },
    delete_list (state, data) {
        let length = state.list.length
        let list = state.list
        let index 
        for(let i = 0; i < length; i++) {
            if (list[i].id === data.id) {
                index = i
                break;
            }
        }
        list.splice(index, 1)
    },
    add_complete (state, data) {
        if (data.addAll) {
            state.complete = state.complete.concat(data.complete)
        } else {
            state.complete.push(data.complete)
        }
    },
    delete_complete (state, data) {
        let length = state.complete.length
        let complete = state.complete
        let index 
        for(let i = 0; i < length; i++) {
            if (complete[i].id === data.id) {
                index = i
                break;
            }
        }
        complete.splice(index, 1)
    },
    modify_list (state, data) {
        state.list = state.list.map(item => {
            if (item.id === data.id) {
                item = data
            }
            return item
        })
    }
}

let obj = {}

for (let i in mutations) {
    
    obj[i] = function () {
        mutations[i].apply(this, [...arguments]);
        i.indexOf("list") >= 0 ? localStorage.setItem("list", JSON.stringify(arguments[0].list)) : localStorage.setItem("complete", JSON.stringify(arguments[0].complete))
    }
}

console.log(obj)

export default obj