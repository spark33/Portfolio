function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        alert("Hey! Thanks for visiting. Unfortunately, my site doesn't currently support Internet Explorer. Try me in another browser!");
    }

    return false;
}

msieversion();