/**
 *
 * @param fn 要被节流的函数
 * @param delay 规定时间，规定时间过了函数才能执行下一次
 */

function throttle(fn, delay) {
    let lastTime = 0;
    return function () {
        let nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn.call(this);
            lastTime = nowTime;
        }
    }
}

document.onscroll = throttle(function () {
    console.log('scroll事件被触发了' + Date.now())
}, 200);

/**
 *
 * @param fn
 * @param delay
 */
function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this);
        }, delay)
    }
}

document.getElementById('btn').onclick = debounce(function () {
    console.log('按钮被点击了' + Date.now());
}, 1000);
