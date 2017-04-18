/**
 * Created by 40681 on 2017/4/17.
 */
//清除300ms延迟影响
FastClick.attach(document.body);
//根节点字体大小适配
~(function (desW) {
    var winW = document.documentElement.clientWidth;
    var testW = document.querySelector('.wrapTest');
    var ratio=winW/desW;
    if(winW>desW){
        testW.style.width = desW+"px";
        testW.style.margin = '0 auto';
        ratio = winW/testW.style.width;
    }
    document.documentElement.style.fontSize = ratio * 100 + "px";
})(750);
//music control
var canPlay = document.querySelector('#play');
var audio = document.getElementById('audio');
canPlay.classList.toggle('musicMove');
canPlay.onclick = function () {
    if (canPlay.className.indexOf('Move') !== -1) {
        audio.pause();
        canPlay.classList.toggle('musicMove');
    } else {
        audio.play();
        canPlay.classList.toggle('musicMove');

    }
};
//swiper
var mSwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    onSlideChangeStart:function (swiper) {
        //滑动结束调用回调函数
        var slideAry = swiper.slides;
        var curIndex = swiper.activeIndex;
        var targetId = 'page';
        switch (curIndex){
            case 0:
                targetId+=slideAry.length-2;//元素倒数第2个
                break;
            case slideAry.length-1://元素第一个
                targetId+=1;
                break;
            default :
                targetId += curIndex;
        }
        [].forEach.call(slideAry,function (item,index) {
            if(curIndex === index){
                item.id = targetId;
            }else{
                item.id = null;
            }
        })
    }
});