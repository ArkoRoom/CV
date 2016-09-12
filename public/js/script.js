$(function () {

  // Scroll
  $('.arrow-top, .arrow-bottom, .move').click(function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });

  // Effet sur le scroll
  $(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.arrow-top').fadeIn('slow');
    }
    else {
      $('.arrow-top').fadeOut('slow');
    }
  });

  //Effet nav fixe
  var screen = $(window),
      nav = $('.navbar, .navbar-default'),
      offset = nav.offset().top;

  screen.scroll(function() {
      if (offset < screen.scrollTop()) {
          nav.addClass("nav-scroll");
      } else {
          nav.removeClass("nav-scroll");
      }
  });

});
