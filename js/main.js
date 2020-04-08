$(document).ready(function(){
    $('.testi-text').slick({
        dots:true,
        dotsClass:'slick-dots',
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000
    });


    $(".js--sticky--waypoint").waypoint(function (direction) {
        if (direction == "down"){
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });


    var mixer = mixitup('.imgGa-mix');
});