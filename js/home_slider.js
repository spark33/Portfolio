// Home Slider

let transform = $('#banner-slider-slides').css('translateX');
var currentSlide = 0;
var numSlides = 3;

// console.log($('.slider-dot').get(0));
let firstDot = $('.slider-dot').get(0);
$(firstDot).addClass('active');

$('.slider-dot').click(function() {
	let index = $('.slider-dot').index($(this));
	moveSlider(index);
});

$('#home-banner-next-button').click(function(e){
	e.preventDefault();
	let newIndex = (currentSlide + 1) % numSlides;
	moveSlider(newIndex);
});

function moveSlider(newIndex) {
	currentSlide = newIndex;
	let slideAmount = newIndex * -100;
	let transformProp = 'translateX(' + slideAmount + 'vw)';
	$('#banner-slider-slides').css('transform', transformProp);

	$('.slider-dot').removeClass('active');
	let activeDot = $('.slider-dot').get(newIndex);
	$(activeDot).addClass('active');
}
