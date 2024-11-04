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

$('.protfolio__slider').owlCarousel({
    items: 1,
    // margin: 24,
    nav: true,
    dots: true,
    navText: ["<img src='img/carousel-arrow-left.svg'>","<img src='img/carousel-arrow-right.svg' >"],
    navContainer: '.portfolio__slider__navs',
    dotsContainer: '.portfolio__slider__dots',
});
$('.partners__slider').owlCarousel({
    margin: 20,
    nav: true,
    dots: true,
    // autoWidth: true,
    navText: ["<img src='img/carousel-arrow-left.svg'>","<img src='img/carousel-arrow-right.svg' >"],
    responsive: {
        0: {
            items: 2,
            navContainer: '.partners__slider__navs',
            dotsContainer: '.partners__slider__dots',
        },
        550: {
            items: 3,
        }
    }
});
$('.thankyouletter__slider').owlCarousel({
    items: 3,
    center: true,
    loop: true,
    margin: 2,
    nav: false,
    dots: true,
    navText: ["<img src='img/carousel-arrow-left.svg'>","<img src='img/carousel-arrow-right.svg' >"],
    responsive: {
        0: {
            nav: false,
        },
        550: {
            nav: true,
        } 
    }
});
$('.reviews__slider').owlCarousel({
    items: 2,
    loop: true,
    margin: 23,
    nav: false,
    dots: true,
    navText: ["<img src='img/carousel-arrow-left.svg'>","<img src='img/carousel-arrow-right.svg' >"],
    navContainer: '.reviews__slider__navs',
    dotsContainer: '.reviews__slider__dots',
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        550: {
            items: 2,
            nav: true,
        } 
    }
});









