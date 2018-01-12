$(function () {
    $('.fix-cursor').click(function () {
        if($(this).hasClass('right-cursor')){
            $('.fix-cursor').removeClass('right-cursor').addClass('left-cursor')
            $('.fix-cursor img').attr('src','../images/left.png');
            $('body').removeClass('full-screen');
        }else{
            $('.fix-cursor').removeClass('left-cursor').addClass('right-cursor');
            $('.fix-cursor img').attr('src','../images/right.png');
            $('body').addClass('full-screen');
        }
    });
});
$(function () {
    $('.show-nav .logo').click(function () {
        $('.show-nav').hide();
        $('.hide-nav').show();
    });
    $('.hide-nav .logo').click(function () {
        $('.hide-nav').hide();
        $('.show-nav').removeClass('hide').show();
    });
})