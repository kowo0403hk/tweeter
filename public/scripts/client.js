////////////////////////////////////////////////////////////////////////
// document.ready()
////////////////////////////////////////////////////////////////////////

$(() => {
  // toggle button for new tweet
  $('.createNew').on('click', function() {
    $('.new-tweet').toggle('slow');
    $('#tweet-text').focus();
  });

  // form submission
  $('.new-tweet-form').on('submit', (event) => {
    event.preventDefault();
    const serializedWord = $('.new-tweet-form').serialize();

    if (serializedWord.length > 145) {
      $('.wordExc').slideDown();
    } else if (serializedWord.length <= 5) {
      $('.wordNone').slideDown();
    } else {
      clearTextArea();
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/tweets',
        data: serializedWord,
        success: function() {
          loadOneTweet();
        }
      });
    }
  });
  loadTweets();
});


////////////////////////////////////////////////////////////////////////
// tweets rendering and helper functions
////////////////////////////////////////////////////////////////////////

const clearTextArea = function() {
  $('#tweet-text').val('');
  $('.counter').val('140');
  $('.wordExc').hide();
  $('.wordNone').hide();
};

const escapeStr = function(str) {
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
};

const loadTweets = function() {
  $.ajax({
    url: 'http://localhost:8080/tweets',
    dataType: 'json',
    success: function(data) {
      renderTweets(data);
    }
  });
};

const loadOneTweet = function() {
  $.ajax({
    url: 'http://localhost:8080/tweets',
    dataType: 'json',
    success: function(data) {
      const latestTweet = [data[(data.length - 1)]];
      renderTweets(latestTweet);
    }
  });
};