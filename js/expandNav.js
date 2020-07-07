function expandNav() {
  if (document.getElementById('top-navigation').style.height != "100vh") {
    jQuery("#top-navigation").css('background-color', 'rgba(56, 56, 56, 0.95)');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery(".top-button").css('display', 'flex');
    jQuery("#home").css('margin-left', 'inherit');
    jQuery(".top-navigation").css('height', '100vh');
    jQuery(".top-navigation").css('flex-direction', 'column');
    jQuery(".top-hamburger").css('position', 'fixed');
    jQuery(".top-hamburger").css('top', '30px');
    jQuery(".top-hamburger").css('right', '30px');
    jQuery("*").css('overflow', 'hidden');
  } else {
    jQuery("#top-navigation").css('background-color', 'none');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery("#home").css('margin-left', 'auto');
    jQuery(".top-button").css('display', 'flex');
    jQuery(".top-navigation").css('flex-direction', 'row');
    jQuery(".top-navigation").css('height', 'inherit');
    jQuery(".top-hamburger").css('position', 'static');
    jQuery("*").css('overflow-x', 'hidden');
    jQuery("*").css('overflow-y', 'auto');
  }
}
