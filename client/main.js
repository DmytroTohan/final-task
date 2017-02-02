$(window).scroll(function() {
    var $menu = $('nav.navbar');
    var top = $(this).scrollTop();
    $('body').css('margin-top', top > 0 ? '5px' : '0px');
    $('ul.navbar-right').css('margin-right', top > 0 ? '15px' : '0px');
    if (top > 0) {
        $menu.addClass('navbar-fixed-top');
    } else if (top < 50) {
        $menu.removeClass('navbar-fixed-top');
    }
});
