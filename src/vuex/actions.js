export default {
    add_list ({ commit }, data) {
        commit("add_list", data)
    },
    delete_list ({ commit }, data) {
        commit("delete_list", data)
    },
    add_complete ({ commit }, data) {
        commit("add_complete", data)
    },
    delete_complete ({ commit }, data) {
        commit("delete_complete", data)
    },
    modify_list ({ commit }, data) {
        commit("modify_list", data)
    }

}