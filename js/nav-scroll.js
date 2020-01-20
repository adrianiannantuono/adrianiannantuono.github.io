$(document).ready(function () {
    var scroll_pos = 0;

    $(window).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 150) {
          $(".navBackground").css('background', '#050523');
        } else {
          $(".navBackground").css('background', 'none');
          $(".navBackground").css('transition', '0.2s');
        }
        console.log(scroll_pos);
    });
});
