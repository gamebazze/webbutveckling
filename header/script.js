$('#toggle-mobile-menu').click(function(){
    let menu = $('#mobile-menu');

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(menu).animate({
            height: 0
        }, 400);
    } else {
        $(this).addClass('active');
        $(menu).animate({
            height: $(menu).prop('scrollHeight')
        }, 400);
    }
})