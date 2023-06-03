// Normalize requestAnimationFrame
const fps = 30;
const requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        return setTimeout(callback, 1000 / fps);
    };
const cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    function (timer) {
        return clearTimeout(timer);
    };
window.requestAnimationFrame = requestAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;