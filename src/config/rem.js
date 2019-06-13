(function rem () {
    let width = document.documentElement.clientWidth
    let ev = window.onorientationchange ? "orientationchange" : "resize"

    function setRem () {
        document.documentElement.style.fontSize = width / 375 * 20 + "px"
    }

    addEventListener(ev, setRem)
    addEventListener("DOMContentLoaded", setRem)
})()