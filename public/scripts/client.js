/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {

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


$(document).ready(function() {
  
  const $form = $("#createTweet");

  $(".new-tweet").hide();
  
  $("#writeTweet").click(function() {
    $(".new-tweet").slideToggle( "slow", function() { //text area to be hid
    $("#textInput").focus()
    });
  });


  function loadtweets() {
    $.get("/tweets")
    .then(function(data) {
      renderTweets(data);
    });
  }

  loadtweets();

});
