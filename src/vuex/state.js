export default {
    list: localStorage["list"] ? JSON.parse(localStorage["list"]) : [],
    complete: localStorage["complete"] ? JSON.parse(localStorage["complete"]) : []
}