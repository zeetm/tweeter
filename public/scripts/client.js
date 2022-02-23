/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = function createTweetElement(tweetData) {
  const $tweet = $(`
  <section class="all-tweets">
  <article class="tweet">
    <header>
        <img src=${tweetObj.user.avatars}>
        <h4>${tweetObj.user.name}</h4>
        <p>${tweetObj.user.handle}</p>
    </header>
    <p>${tweetObj.content.text}</p>
    <footer>
      <p>10 days ago</p>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>

    </footer>
  </article>
</section>
  `);

  return $tweet

}


const renderTweets = function(tweets) {
for (let index = 0; index < tweets.length; index++) { 
let tweet = tweets[index]; // loops through tweets
$("#tweets-container").prepend(createTweetElement(tweet)); // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}
}

renderTweets(data);
