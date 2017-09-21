/**
 * Created by admin on 2017/9/4.
 */
$(function() {
    FastClick.attach(document.body);
});
//阻止触摸事件
document.addEventListener("touchmove", myFunction);
function myFunction(e) {
    e.preventDefault();
}
$(document).ready(function(){
    $('.weui-loadmore').hide(0);
    //解除触摸锁定
    document.removeEventListener("touchmove", myFunction);
});
jQuery(document).ready(function ($) {
    var isLateralNavAnimating = false;
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        //若动画正在进行，则停止
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0)
                isLateralNavAnimating = true;
            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //动画结束
                isLateralNavAnimating = false;
            });
        }
    });
});
/*触摸侧滑*/
var windowHeight = $(window).height(),
$body = $("body");
$body.css("height", windowHeight); //重要代码
$body.on("touchstart", function(e) {
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$body.on("touchmove", function(e) {
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
    if ( Math.abs(X) > Math.abs(Y) && X < 0) {
        var isLateralNavAnimating = false;
        e.preventDefault();
        //若动画正在进行，则停止
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0)
                isLateralNavAnimating = true;
            $('body').removeClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //动画结束
                isLateralNavAnimating = false;
            });
        }
    }
});