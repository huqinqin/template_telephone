/**
 * Created by wl on 2017/9/5.
 */
$(function () {
    var fold = true;
        $('.hideContent').click(function () {
            if(fold){
                $(this).attr('class','hideContent glyphicon glyphicon-chevron-up');
                $(this).css('text-decoration','none');
                fold = false;
            }else{
                $(this).attr('class','hideContent glyphicon glyphicon-chevron-down');
                $(this).css('text-decoration','none');
                fold = true;
            }
        });
});


