$(document).ready(function(){
  $('.slider__image').slick({
		// autoplay: true,
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