window.onscroll = function() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top <= 99) {
       jQuery("#top-navigation").css('background-color', 'rgba(56, 56, 56, 0.9)');
       jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    }
    else {
       jQuery("#top-navigation").css('background', 'none');
       jQuery("#top-navigation").css('transition', 'ease-in-out 0.25s');
    }
}
