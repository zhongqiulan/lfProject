//  onload事件
window.onload = function(){
    //  初始化顶级 swiper对象 
    lofterSwiperReset();
} 

//  初始化顶级swiper
function lofterSwiperReset(){
    var lofterSwiper = new Swiper('.lofter-layout>.swiper-container',{
        //  分页器
        pagination : '.lofter-layout-tab',
        //  分页器允许点击
        paginationClickable :true,
    })
}