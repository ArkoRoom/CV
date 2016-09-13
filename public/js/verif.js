$(function () {

  //Verif contact
  $('#name').keyup(function () {
    if ($('#name').val().length > 3) {
      $('.verifName-ok').show();
      $('.verifName-error').hide();
    }
    else {
      $('.verifName-error').show();
      $('.verif-ok').hide();
    }
  });
  $('#firstname').keyup(function () {
    if ($('#firstname').val().length > 3) {
      $('.verifFirstname-ok').show();
      $('.verifFirstname-error').hide();
    }
    else {
      $('.verifFirstname-error').show();
      $('.verifFirstname-ok').hide();
    }
  });
  $('#mail').keyup(function () {
    if ($('#mail').val().length > 15) {
      $('.verifMail-ok').show();
      $('.verifMail-error').hide();
    }
    else {
      $('.verifMail-error').show();
      $('.verifMail-ok').hide();
    }
  });
  $('#subject').keyup(function () {
    if ($('#subject').val().length > 5) {
      $('.verifSubject-ok').show();
      $('.verifSubject-error').hide();
    }
    else {
      $('.verifSubject-error').show();
      $('.verifSubject-ok').hide();
    }
  });
  $('#message').keyup(function () {
    if ($('#message').val().length > 30) {
      $('.verifMessage-ok').show();
      $('.verifMessage-error').hide();
    }
    else {
      $('.verifMessage-error').show();
      $('.verifMessage-ok').hide();
    }
  });

});
