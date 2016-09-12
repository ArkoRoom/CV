$(function () {

  // Effet Slide
  $('.home').click(function () {
    $('#home').slideToggle('slow');
    $('#experiences, #competences, #creation, #contact').hide();
    $('li.home').addClass('active');
    $('li.contact, li.experiences, li.competences, li.creation').removeClass('active');
  });
  $('.experiences').click(function () {
    $('#experiences').slideToggle('left');
    $('#home, #competences, #creation, #contact').hide();
    $('li.experiences').addClass('active');
    $('li.home, li.contact, li.competences, li.creation').removeClass('active');
  });
  $('.competences').click(function () {
    $('#competences').slideToggle('slow');
    $('#experiences, #home, #creation, #contact').hide();
    $('li.competences').addClass('active');
    $('li.home, li.experiences, li.contact, li.creation').removeClass('active');
  });
  $('.creation').click(function () {
    $('#creation').slideToggle('slow');
    $('#experiences, #competences, #home, #contact').hide();
    $('li.creation').addClass('active');
    $('li.home, li.experiences, li.competences, li.contact').removeClass('active');
  });
  $('.contact').click(function () {
    $('#contact').slideToggle('slow');
    $('#experiences, #competences, #home, #creation').hide();
    $('li.contact').addClass('active');
    $('li.home, li.experiences, li.competences, li.creation').removeClass('active');
  });

});
