$(function () {

  //Verif contact
  $('#name').keyup(function () {
    if ($('#name').val().length > 3) {
      $('.verif-ok').show();
      $('.verif-error').hide();
    }
    else {
      $('.verif-error').show();
      $('.verif-ok').hide();
    }
  });

});
