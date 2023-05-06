$(document).ready(function(){
  $('.slider__image').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		dots: true,
		fade: true,
		dotsClass: 'slickdots',
		appendDots: $('.bg__slider__dots'),
  });
});

$(document).ready(function(){
	$('.product__slick').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		arrows: true,
		centerMode: true,		
		centerPadding: 0,
		responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
						},
						{
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
										centerMode: true,
										arrows: false,
									dots: true,
										
                }
            }
        ]
  });
});

$(document).ready(function(){
	$('.partners__slick').slick({
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 3,
		arrows: true,
		centerMode: true,		
		adaptiveHeight: true,
		centerPadding: 0,
		
  });
});