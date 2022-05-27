////////////////////////////////////////////////////////////////////////
// word counter for tweet characters
////////////////////////////////////////////////////////////////////////
$(function() {
  $('#tweet-text').on('input', function() {
    clearErrorMsg();
    const wordLimit = 140;
    const wordInput = $(this).val();
    const wordLeft = wordLimit - wordInput.length;

    // to update the word count on webpage
    $('.counter').html(wordLeft);

    if (wordLeft < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});

////////////////////////////////////////////////////////////////////////
// helper function
////////////////////////////////////////////////////////////////////////

const clearErrorMsg = function() {
  $('.wordExc').hide('slow');
  $('.wordNone').hide('slow');
};