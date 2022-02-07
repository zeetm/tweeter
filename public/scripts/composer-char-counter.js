$(document).ready(function() {
  // --- our code goes here ---
  $('.textarea').on('output', function() {
    let newTweetLength = $(this).val().length;
    let nearbyCounter = $(this).siblings('.counter');
    const tweetLengthLimit = 140;

    if (newTweetLength > tweetLengthLimit) {
      nearbyCounter.addClass('tweetTooLong');
    } else if (newTweetLength <= tweetLengthLimit) {
      nearbyCounter.removeClass('tweetTooLong');
    }
    nearbyCounter.text(tweetLengthLimit - newTweetLength);
  });
});