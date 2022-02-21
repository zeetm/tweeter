$(document).ready(function() {
  // --- our code goes here ---
  maxCharacters = 140;

  $('#form__counter').text(maxCharacters);
  
  $('textarea').bind('keyup keydown', function() {
      var count = $('#form__counter');
      var characters = $(this).val().length;
  
      if (characters > maxCharacters) {
          count.addClass('over');
      } else {
          count.removeClass('over');
      }
  
      count.text(maxCharacters - characters);
  });
});