////////////////////////////////////////////////////////////////////////
// stretch scroll functionality
////////////////////////////////////////////////////////////////////////
$(() => {
  $('.bttButton').hide();

  // navbar's appearance based on the below code
  $(window).on('scroll', function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $('nav').hide();
      $('.bttButton').show();
    } else {
      $('nav').show();
      $('.bttButton').hide();
    }
  });

  // back-to-top button activation
  $('.bttButton').on('click', function() {
    window.scrollTo({
      top: 0
    });
    $('.new-tweet').toggle(true);
    $('#tweet-text').focus();
  });
});