var carouselwidth = $('.carousel-inner') [0].scrollwidth;
var cardwidth = $('.carousel-item').width();
var scrollPosition = 0 ;

$('.carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselwidth - (cardwidth * 4))){
    console.log('next');
    scrollPosition = scrollPosition + cardwidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
    }
});

