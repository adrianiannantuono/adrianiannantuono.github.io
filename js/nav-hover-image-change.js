$("a").hover(function() {
    $("#nav-select-image").removeClass().addClass($(this).attr('rel'));
  });