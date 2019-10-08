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

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        let ieMessage = "Hey! Thanks for visiting. Unfortunately, my site doesn't currently support Internet Explorer. Try me in another browser!"
	    $('.loader-wrapper').append(ieMessage);

	    window.stop();
	    return true;
    }

    return false;
}