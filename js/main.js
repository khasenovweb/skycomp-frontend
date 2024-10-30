$('[data-burger]').click(function(){
    var burger = $(this);
    var mobile_menu = $('[data-navbar-mobile]');
    burger.toggleClass('active');
    mobile_menu.toggleClass('active');
});


$('.about__block__slider').owlCarousel({
    items: 2,
    margin: 24,
    nav: true,
    dots: true,
    navText: ["<img src='img/carousel-arrow-left.svg'>","<img src='img/carousel-arrow-right.svg' >"],
    navContainer: '.about__block__slider__navs',
    dotsContainer: '.about__block__slider__dots',
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        }
    }
});