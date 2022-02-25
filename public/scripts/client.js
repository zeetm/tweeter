/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {
  let tweetBody = $(`
  <section class="all-tweets">
  <article class="tweet">
    <header>
        <img src=${escape(tweet.user.avatars)}>
        <h4>${escape(tweet.user.name)}</h4>
        <p>${escape(tweet.user.handle)}</p>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <p>${escape(tweet.created_at)}</p>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>

    </footer>
  </article>
</section>
  `);

  return $("<article>")
    .addClass("tweet")
    .append(tweetBody);
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

  $form.on("submit", function(event) {

    event.preventDefault();
    const inputText = $('#textInput').val();
    
    if (!inputText) { 
      alert('empty');
    } else if(inputText.length > 140) {
      alert('too long');
    } else {
      $.post("/tweets", $form.serialize())
      .done(function(data) {
        loadtweets();
        $("#textInput").val('').empty();
      });
    }
  });

  function loadtweets() {
    $.get("/tweets")
    .then(function(data) {
      renderTweets(data);
    });
  }

  loadtweets();

});
