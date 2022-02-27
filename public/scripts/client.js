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
  let tweetBody = 
  `<header>
    <div class="nameImg">
    <img src="${escape(tweet.user.avatars)}" alt="" />
    <div class="name">${escape(tweet.user.name)}</div>
    </div>
    <div class="userName">${escape(tweet.user.handle)}</div>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer>
    <div class="daysAgo">${escape(tweet.created_at)}</div>
    <div class="references">
    <i class="far fa-flag" id=flag>    </i> 
     <i class="fas fa-retweet" id=retweet> </i>
    <i class="fas fa-heart" id=heart></i>
    </div>
  </footer>`;

  return $("<article>")
    .addClass("tweet")
    .append(tweetBody);
}
//renderTweets

function renderTweets(tweets) {
  $("#tweets-container").replaceWith("<section id='tweets-container'/>");
  tweets.forEach( tweet => {
    $("#tweets-container").prepend(createTweetElement(tweet));
  })
}


$(document).ready(function() {
  
  const $form = $("#createTweet");

  $(".new-tweet").hide();
  
  $("#writeTweet").click(function() {
    $(".new-tweet").slideToggle( "slow", function() { //text area to be hid
    $("#textInput").focus()
    });
  });

  $form.on("submit", function(event) {
console.log('here')
    event.preventDefault();
    const inputText = $('#textInput').val();
    
    if (!inputText) { 
      alert('empty string');
    } else if(inputText.length > 140) {
      alert('too long string');
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

const formatTime = milliseconds => {
  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  const hoursAway = Math.floor((Date.now() - milliseconds) / hour);
  const daysAway = Math.floor((Date.now() - milliseconds) / day);
  const monthsAway = Math.floor((Date.now() - milliseconds) / month);
  const yearsAway = Math.floor((Date.now() - milliseconds) / year);
  if (Date.now() === milliseconds) {
    return "Just now";
  } else if (yearsAway > 0) {
    return `${yearsAway} years ago`; // years away
  } else if (monthsAway > 0) {
    return `${monthsAway} months ago`; // months away
  } else if (daysAway > 0) {
    return `${$daysAway} days ago`; // days away
  } else if (hoursAway > 0) {
    return `${hoursAway} hours ago`; //hours away
  } else {
    return "Recently";
  }
};

