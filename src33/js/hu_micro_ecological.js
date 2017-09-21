/**
 * Created by wl on 2017/9/8.
 */
$(function () {
    var fold = true;
    $('.microHideContent').click(function () {
        if(fold){
            $(this).prev().find('.micro_hide').stop().slideDown(200);
            $(this).attr('class','microHideContent glyphicon glyphicon-chevron-up');
            $(this).css('text-decoration','none');
            fold = false;
        }else{
            $(this).attr('class','microHideContent glyphicon glyphicon-chevron-down');
            $(this).css('text-decoration','none');
            $(this).prev().find('.micro_hide').stop().slideUp(200);
            fold = true;
        }

    });
    var i = 0;
    if($(window).scrollTop()> 10){
        $('#accordion4 .micro_hide').css('display','none');
    }
    $(window).scroll(function () {
        //debugger;
        //alert("000");
        //console.log(i);
        if($(window).scrollTop()> 0 && i==0){
            $('#accordion4 .micro_hide').css('display','none');
        }
        i++;
    });

});