// 当屏幕变动的时候改变自适应
window.onresize = res => {
    document.getElementsByTagName('html')[0].style.fontSize = document.body.clientWidth * 100 / 1366 + 'px'
}
//JQ
$(() => {
    // 初始化自适应
    document.getElementsByTagName('html')[0].style.fontSize = document.body.clientWidth * 100 / 1366 + 'px'

    let urlArr = window.location.pathname.split('/') // 获取url的地址
    let currentUrl = urlArr[urlArr.length - 1] // 获取当前的url

    // 随机颜色
    function randomColor () {
        return Math.ceil(Math.random() * 255)
    }

    // 添加导航栏文字样式
    function addNavStyle  (option) {
        $(".pubilc-nav__item:eq(" + option + ")").css("color", "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")")
    }

    switch (currentUrl) {
        case 'index.html':
            addNavStyle(0)
            break;
        case 'vue.html':
            addNavStyle(1)
            break;
        case 'mini.html':
            addNavStyle(2)
            break;
        case 'es.html':
            addNavStyle(3)
            break;
        default:
            addNavStyle()
    }
})
