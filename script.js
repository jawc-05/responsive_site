$('nav a').click(function(e){
    e.preventDefault(e);
    var id = $(this).attr('href');
        targetOffset = $(id).offset().top;
        console.log(targetOffset);
        $('html, body').animate({
            scrollTop: targetOffset -108
        }, 500);
})