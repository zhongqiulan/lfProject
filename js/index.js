//  onload事件
window.onload = function () {
    //  初始化顶级 swiper对象 
    lofterSwiperReset();
    //  区域1 的swiper
    indexSwiperReset();
}

//  初始化顶级swiper
function lofterSwiperReset() {
    var lofterSwiper = new Swiper('.lofter-layout>.swiper-container', {
        //  分页器
        pagination: '.lofter-layout-tab',
        //  分页器允许点击
        paginationClickable: true,
    })
}

//  初始化 区域1的 swiper
function indexSwiperReset() {
    // 创建 顶级swiper 
    var indexSwiper = new Swiper('.index-container', {
        //  分页器
        pagination: '.index-pagination',
        //  分页器允许点击
        paginationClickable: true,
        //  自定义分页器内容
        paginationBulletRender: function (swiper, index, className) {
            if (index == 0) {
                return '<span class="' + className + '">关注</span>';
            } else if (index == 1) {
                return '<span class="' + className + '">订阅</span>';
            }

        }
    })

    //  关注区域的 swiper
    var attentionSwiper = new Swiper('.index-attention-container', {
        //  滚动条 
        scrollbar: '.index-attention-container>.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    })
    //  订阅区域的 swiper
    var subscribeSwiper = new Swiper('.index-subscribe-container', {
        //  滚动条 
        scrollbar: '.index-subscribe-container>.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    })
}