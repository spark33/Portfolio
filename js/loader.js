$(window).on("load",function(){
	setTimeout(function() {
		$(".loader-wrapper").fadeOut(1500);
	}, 2000);
	$("#default-layout-main-site").css('display', 'block');
});