const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  tweets.forEach(function(tweet) {
    let $tweet = createTweetElement(tweet);
    return $('#tweets-container').append($tweet);
  })
};


const createTweetElement = function(tweet) {
  const user = tweet.user;
  const content = tweet.content;
  const createdAt = '4 days ago';
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
    ${content.text} 
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

renderTweets(data);