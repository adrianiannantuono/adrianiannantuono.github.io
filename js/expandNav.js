function expandNav() {
  if (document.getElementById('top-navigation').style.height != "100vh") {
    jQuery("#top-navigation").css('background-color', 'rgba(56, 56, 56, 0.95)');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery(".top-button").css('height', '90px');
    jQuery("#home").css('margin-left', 'inherit');
    jQuery(".top-navigation").css('height', '100vh');
    jQuery(".top-navigation").css('flex-direction', 'column');
    jQuery("*").css('overflow', 'hidden');
  } else {
    jQuery("#top-navigation").css('background', 'none');
    jQuery("#top-navigation").css('transition', 'ease-in-out 0.4s');
    jQuery("#home").css('margin-left', 'auto');
    jQuery(".top-button").css('height', 'auto');
    jQuery(".top-navigation").css('flex-direction', 'row');
    jQuery(".top-navigation").css('height', 'inherit');
    jQuery("*").css('overflow-x', 'hidden');
    jQuery("*").css('overflow-y', 'auto');
  }
}
