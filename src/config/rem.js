(function rem () {
    
    let ev = "orientationchange" in window ? "orientationchange" : "resize"

    function setRem () {
        let width = document.documentElement.clientWidth
        document.documentElement.style.fontSize = width / 375 * 20 + "px"
    }

    window.addEventListener(ev, setRem)
    window.addEventListener("DOMContentLoaded", setRem)
})()