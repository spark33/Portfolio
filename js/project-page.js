$(document).ready(function() {

	let projectHeaders = $('.project-main-body h4');
	let projectTOC = $('.project-sidebar > #table-of-contents > p');

	projectHeaders.each(function() {

		let newLink = $('<a></a>');
		newLink.text($(this).text());
		newLink.attr('href', '#' + this.id);

		newLink.appendTo(projectTOC);
	});

	// Scroll to section animation

	$("a[href^=#]").click(function(e) {
		e.preventDefault();
		let page = "/" + $(this).attr('href').split('#')[0];
		let hash = '#' + $(this).attr('href').split('#')[1];
		
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 750);
		location.href.replace(hash, "");
		$('body').removeClass('nav-open');
		$('#mobile-nav-screen').removeClass('visible');
	});

});