$(function(){
    var navbarCollapse = function (){
        if ($("#mainNav").ofset().top > 10 ) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();

    $(window).scroll(navbarCollapse);
})