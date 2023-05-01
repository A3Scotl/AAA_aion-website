/*lăn chuột trên web đổi màu header*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('header').addClass('scroll_nav');
        } else
            $('header').removeClass('scroll_nav');
    });
 });
 
 