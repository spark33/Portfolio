// Home Slider

let transform = $('#banner-slider-slides').css('translateX');
var currentSlide = 0;

// console.log($('.slider-dot').get(0));
let firstDot = $('.slider-dot').get(0);
$(firstDot).addClass('active');

$('.slider-dot').click(function() {
	let index = $('.slider-dot').index($(this));
	let slideAmount = index * -100;
	let transformProp = 'translateX(' + slideAmount + 'vw)';
	$('#banner-slider-slides').css('transform', transformProp);

	$('.slider-dot').removeClass('active');
	let activeDot = $('.slider-dot').get(index);
	$(activeDot).addClass('active');

});