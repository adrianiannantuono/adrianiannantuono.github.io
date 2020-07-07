$(window).resize(function() {
    if (document.getElementById('top-navigation').style.height == "100vh") {
        jQuery(".top-button").css('display', 'flex');
        jQuery(".top-hamburger").css('display', 'flex');
    } else {
        if ($(window).width() > 1000) {
            jQuery(".top-button").css('display', 'flex');
            jQuery(".top-hamburger").css('display', 'none');
          } else {
            jQuery(".top-button").css('display', 'none');
            jQuery(".top-hamburger").css('display', 'flex');
          }
    }
}).resize();