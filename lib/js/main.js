$('#sender').on('blur', function() {
  var val = $(this).val();
  if (val.length >= 1) {
    $('#referralName').html('<strong>' + val + '</strong>');
  } else {
    $('#referralName').text('<insert referral name>');
  }
});
$('#receiver').on('blur', function() {
  var val = $(this).val();
  if (val.length >= 1) {
    $('#familyName').html('<strong>' + val + '</strong>');
  } else {
    $('#familyName').text('<insert family\'s last name>');
  }
});

/**
 * AJAX Function
 */

// lastName
// firstName
// adoptionStage
// familySize
// state
// adoptionCountry
// adoptionInspiration
// previousFundraising
function submitToGoogle() {
  var lastName = $('input[name=lastName]').val(),
      firstName = $('input[name=firstName]').val(),
      adoptionStage = $('input[name=adoptionStage]').val(),
      familySize = $('input[name=familySize]').val(),
      state = $('input[name=state]').val(),
      adoptionCountry = $('input[name=adoptionCountry]').val(),
      adoptionInspiration = $('textarea[name=adoptionInspiration]').val(),
      previousFundraising = $('textarea[name=previousFundraising]').val();

  $.ajax({
    url: 'https://docs.google.com/forms/d/1VgyJTvOyCzM6PoceFCUfkzh8qpFxqzxUk7EgiaWtZME/formResponse',
    data: { "entry_58212208": lastName, 
            "entry_571449198": firstName, 
            "entry_1482163706": adoptionStage, 
            "entry_90528210": familySize,
            "entry_1883413622": state,
            "entry_1454426234": adoptionCountry,
            "entry_2038613206": adoptionInspiration,
            "entry_581325192": previousFundraising,
          },
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $('form[name=apply]').fadeOut(function() {
          $(this).html('<h1>Thank You!</h1><p class="em">We\'ll be in touch shortly.</p>');
          $(this).fadeIn();
        });
      },
      200: function () {
        $('form[name=apply]').fadeOut(function() {
          $(this).html('<h1>Thank You!</h1><p class="em">We\'ll be in touch shortly.</p>');
          $(this).fadeIn();
        });
      }
    }
  });

}
$('form[name=apply] input, form[name=apply] textarea').each(function() {
  $(this).on('blur', function() {
    if ($(this).val().length <= 0) {
      $(this).parent().addClass('has-error');
    } else {
      $(this).parent().removeClass('has-error');
    }
  });
});
$('form[name=apply]').on('submit', function() {
  if ($('form[name=apply]').find('.has-error').length >=1 || !$('input').val() || !$('textarea').val()) {
    $('#error').html('<div class="alert alert-danger">Please make sure all fields are complete before submitting.');
    var url = location.href;
    location.href = "#error";
    history.replaceState(null,null,url);
  } else {
    submitToGoogle();
  }
  return false;
});