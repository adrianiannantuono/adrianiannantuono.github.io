function expandNav() {
  if (document.getElementById('top-navigation').style.height != "100vh") {
    jQuery("#top-navigation").css('background-color', 'rgba(56, 56, 56, 0.95)');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery(".top-button").css('display', 'flex');
    jQuery(".top-button").css('height', '90px');
    jQuery("#home").css('margin-left', 'inherit');
    jQuery(".top-navigation").css('height', '100vh');
    jQuery(".top-navigation").css('flex-direction', 'column');
    jQuery(".top-logo").css('position', 'fixed');
    jQuery(".top-logo").css('top', '0px');
    jQuery(".top-logo").css('left', '50%');
    jQuery(".top-logo").css('transform', 'translateX(-50%)');
    jQuery("#home").css('margin-left', '0px');
    jQuery("#home").css('margin-top', '100px');
    jQuery("*").css('overflow', 'hidden');
  } else {
    if ($(window).width() > 1000) {
      jQuery(".top-button").css('display', 'flex');
      jQuery(".top-hamburger").css('display', 'none');
    } else {
      jQuery(".top-button").css('display', 'none');
      jQuery(".top-hamburger").css('display', 'flex');
    }
    jQuery("#top-navigation").css('background', 'none');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery("#home").css('margin-left', 'auto');
    jQuery(".top-button").css('display', 'none');
    jQuery(".top-button").css('height', 'auto');
    jQuery(".top-navigation").css('flex-direction', 'row');
    jQuery(".top-navigation").css('height', 'inherit');
    jQuery(".top-logo").css('position', 'static');
    jQuery(".top-logo").css('display', 'flex');
    jQuery("#home").css('margin-top', '0px');
    jQuery("#home").css('margin-left', '30px');
    jQuery("*").css('overflow-x', 'hidden');
    jQuery("*").css('overflow-y', 'auto');
  }
}
