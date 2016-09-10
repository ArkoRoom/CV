$(function () {

  // Effet Slide horizontal
  $('.move').click(function () {
    var page = $(this).attr('href'); // On récuopere les href des liens <a>
    var speed = 1000; // On définit une vitesse  ms
    // Grâce à animate(), on définit une animation lors du déplacement
    $('html, body').animate({
      scrollWidth: $(page).offset().left
    }, speed);
    return false;
  });

  // effet sur le scroll
  $(document).scroll(function () {
    if ($(document).scrollWidth() > 500) {
      $('.move').fadeIn('slow');
    }
    else {
      $('.move').fadeOut('slow');
    }
  });

});
