$(function () {

  // Effet Slide horizontal
  $('.home').click(function () {
    $('#home').show('slow');
    $('#experiences').hide('slow');
    $('li.home').addClass('active');
    $('li.experiences').removeClass('active');
  });
  $('.experiences').click(function () {
    $('#experiences').show('slow');
    $('#home').hide('slow');
    $('li.experiences').addClass('active');
    $('li.home').removeClass('active');
  });

});
