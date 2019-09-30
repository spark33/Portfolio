// Home Slider

$('.slider').each(function() {
	$.data(this, 'currentSlide', 0);

	let slider = $(this); 
	let numSlides = slider.find('.slides').children().length;
	$.data(this, 'numSlides', numSlides);
	$(this).find('.slides').css('width', numSlides * 100 + 'vw');

	let firstDot = slider.find('.slider-dot').get(0);
	$(firstDot).addClass('active');
});

$('.slider-dot').click(function() {
	let sliderDots = $(this).parent();
	let index = sliderDots.children().index($(this));
	let slider = sliderDots.parent();
	moveSlider(index, slider);
});

$('.slider-next-button').click(function(e){
	e.preventDefault();
	let slider = $(this).parent();
	let currentSlide = $.data(slider[0], 'currentSlide');
	let numSlides = $.data(slider[0], 'numSlides');
	let newIndex = (currentSlide + 1) % numSlides;
	moveSlider(newIndex, slider);
});

$('.slider-prev-button').click(function(e){
	e.preventDefault();
	let slider = $(this).parent();
	let currentSlide = $.data(slider[0], 'currentSlide');
	let numSlides = $.data(slider[0], 'numSlides');
	let newIndex = (currentSlide - 1) % numSlides;
	if(newIndex < 0) { newIndex = numSlides - 1 };
	moveSlider(newIndex, slider);
});

function moveSlider(newIndex, slider) {
	$.data(slider[0], 'currentSlide', newIndex);
	let slideAmount = newIndex * -100;
	let transformProp = 'translateX(' + slideAmount + 'vw)';
	slider.find('.slides').css('transform', transformProp);

	let sliderDots = slider.find('.slider-dot');
	sliderDots.removeClass('active');
	let activeDot = sliderDots.get(newIndex);
	$(activeDot).addClass('active');
}
