$(window).on("load",function(){
	if(!isIE()) {
		setTimeout(function() {
			$('.loader-wrapper > h4').addClass('active');
		}, 2500);
		setTimeout(function() {
			$(".loader-wrapper").addClass('hidden');
			$("#default-layout-main-site").css('display', 'block');
		}, 3000);
	}
});

function isIE() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
}