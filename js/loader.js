$(window).on("load",function(){
	setTimeout(function() {
		$('.loader-wrapper > h4').addClass('active');
	}, 1000);
	setTimeout(function() {
		$(".loader-wrapper").addClass('hidden');
		$("#default-layout-main-site").css('display', 'block');
	}, 2500);
});