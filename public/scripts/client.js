////////////////////////////////////////////////////////////////////////
// document.ready()
////////////////////////////////////////////////////////////////////////

$(() => {  
  $('.wordExc').hide();
  $('.wordNone').hide();

  $('.createNew').on('click', function() {
    $('.new-tweet').toggle('slow');
    $('#tweet-text').focus();
  });

  $('.new-tweet-form').on('submit', (event) => {
    event.preventDefault();
    const $form = $('.new-tweet-form');
    const serializedWord = $form.serialize();

    if (serializedWord.length > 145) {
      $('.wordExc').slideDown();
    } else if (serializedWord.length <= 5) {
      $('.wordNone').slideDown();
    } else {
      $('#tweet-text').val('');
      $('.counter').val('140');
      $('.wordExc').hide();
      $('.wordNone').hide();
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/tweets',
        data: serializedWord,
        success: function () {
          $('#tweets-container').empty();
          loadTweets();
        }
      })
    }
  });
  loadTweets();
});




////////////////////////////////////////////////////////////////////////
// tweets rendering functions
////////////////////////////////////////////////////////////////////////
const escapeStr = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const renderTweets = function(tweets) {
  tweets.forEach(function(tweet) {
    let $tweet = createTweetElement(tweet);
    return $('#tweets-container').prepend($tweet);
  })
};


const createTweetElement = function(tweet) {


  const user = tweet.user;
  const content = tweet.content;
  const createdAt = timeago.format(tweet["created_at"]);
  let $tweet = $(`
  <article class="tweet">
  <header>
    <div class="avatarHead">
      <img src="${user.avatars}" class="avatarImg">
      <span>${user.name}</span>
    </div>
    <div class="userHandler">
      ${user.handle}
    </div>
  </header>
  <div class="tweet"> 
    ${escapeStr(content.text)} 
  </div>
  <footer>
    <div class="dateCreated">
      ${createdAt}
    </div>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>
  `);

  return $tweet;
}

const loadTweets = function() {
  $.ajax({
    url: 'http://localhost:8080/tweets',
    dataType: 'json',
    success: function(data) {
      renderTweets(data);
    }
  })
};
