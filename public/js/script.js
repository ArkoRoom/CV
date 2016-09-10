$(function () {

  // Effet Slide horizontal
  $('.home').click(function () {
    $('#home').show('slow');
    $('#experiences').hide();
    $('li.home').addClass('active');
    $('li.experiences').removeClass('active');
  });
  $('.experiences').click(function () {
    $('#experiences').show('slow');
    $('#home').hide();
    $('li.experiences').addClass('active');
    $('li.home').removeClass('active');
  });

});
