////////////////////////////////////////////////////////////////////////
// word counter for tweet characters
////////////////////////////////////////////////////////////////////////
$(function() {
  $('#tweet-text').on('input', function() {
    const wordLimit = 140;
    let wordInput = $(this).val();
    let wordLeft = wordLimit - wordInput.length;

    $('.counter').html(wordLeft);

    if (wordLeft < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});