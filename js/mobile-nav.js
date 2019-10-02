//// Mobile Navigation

$('.nav-toggle').click(function() {
	$('body').toggleClass('nav-open');
	$('#mobile-nav-screen').toggleClass('visible');
});

// Scroll to home section

$('a[href="#projects-section"]').click(function(e) {
	e.preventDefault();
	let page = "/" + $(this).attr('href').split('#')[0];
	let hash = '#' + $(this).attr('href').split('#')[1]
	console.log(hash);
	
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 750);
	location.href.replace(hash, "");
	$('body').removeClass('nav-open');
	$('#mobile-nav-screen').removeClass('visible');
});