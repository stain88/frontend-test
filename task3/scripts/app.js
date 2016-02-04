$(document).ready(start);

function start() {
  $.ajax({
    method: "GET",
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
  })
    .done(function(res) {
      console.log(res);
    })
    .fail(function(res) {
      console.log("An error occurred: " + res);
    })
}