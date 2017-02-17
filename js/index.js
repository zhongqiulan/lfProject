//  onload事件
window.onload = function () {
    //  初始化顶级 swiper对象 
    lofterSwiperReset();
    //  区域1 的swiper
    indexSwiperReset();
    // 区域3 的swiper
    messageSwiperReset();
    // 区域4 的swiper
    selfSwiperReset(); 
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

// 初始化 区域3的 swiper
function messageSwiperReset() {
    // 顶级swiper 
    var messageSwiper = new Swiper('.message-container', {
        //  分页器
        pagination: '.message-pagination',
        //  分页器允许点击
        paginationClickable: true,
        //  自定义分页器内容
        paginationBulletRender: function (swiper, index, className) {
            if (index == 0) {
                return '<span class="' + className + '">动态</span>';
            } else if (index == 1) {
                return '<span class="' + className + '">消息</span>';
            } else if (index == 2) {
                return '<span class="' + className + '">聊天</span>';
            }

        }
    })

    //  动态子区域swiper
    var trendSwiper = new Swiper('.message-trend-container', {
        //  滚动条 
        scrollbar: '.message-trend-container>.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    })
    // 消息 子区域Swiper
    var newsSwiper = new Swiper('.message-news-container', {
        //  滚动条 
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    })
}

// 我的区域
function selfSwiperReset(){
    // 顶级container
    var trendSwiper = new Swiper('.self-container', {
        //  滚动条 
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    })
} 