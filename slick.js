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
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: true,
		centerMode: true,		
  });
});