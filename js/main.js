$(document).ready(function(){
    //initialize the full page scrolling
    $('#fullpage').fullpage({
        css3: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true
        }
    });
    //particles effect
    $('#particles-js').particleground();
    //trigger autoresize in the text ares
    $('#textarea1').trigger('autoresize');
});



